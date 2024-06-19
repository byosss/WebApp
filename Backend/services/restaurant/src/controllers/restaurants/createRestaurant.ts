import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import RestaurantModel from '../../models/restaurantModel';

const createRestaurant = async (req: Request, res: Response) => {

    try {
        // Check if the user is a restorer
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        if (decoded.role !== 'restorer') {
            return res.status(403).json({ message: 'You are not authorized to perform this operation' });
        }

        
        req.body.ownerId = decoded.id;

        const newRestaurant = new RestaurantModel(req.body);

        await newRestaurant.validate();

        await newRestaurant.save();

        res.status(201).json({ message: 'Restaurant created successfully', id: newRestaurant.id });
    } 
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request', error });
    }
};

export default createRestaurant;