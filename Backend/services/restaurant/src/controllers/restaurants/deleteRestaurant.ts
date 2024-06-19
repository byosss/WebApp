import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';

const deleteRestaurant = async (req: Request, res: Response) => {

    try {
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    
        // Check if the user is a restorer
        if (decoded.role !== 'restorer') {
            return res.status(403).json({ message: 'You are not authorized to perform this operation' });
        }

        // Check if the user is the owner of the restaurant
        const restaurant = await mongoose.connection.collection('restaurants').findOne({ _id: new mongoose.Types.ObjectId(req.params.restaurantId) });

        // Check if the restaurant exists
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // Check if the user is the owner of the restaurant
        if (decoded.id !== restaurant.ownerId) {
            return res.status(403).json({ message: 'You are not authorized to perform this operation' });
        }

        // Delete the restaurant
        await mongoose.connection.collection('restaurants').deleteOne({ _id: new mongoose.Types.ObjectId(req.params.restaurantId) });

        res.status(200).json({ message: 'Restaurant deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request', error });
    }
};

export default deleteRestaurant;