import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import Client from '../../models/clientModel';

const addItemToCart = async (req: Request, res: Response) => {

    try {
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        const { name, description, price } = req.body;

        const userId = req.params.userId;

        // Check user id
        if (userId !== decoded.id) {
            return res.status(401).json({ msg: 'Unauthorized' });
        }

        // Check if user exists
        const user = await Client.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Add item to cart
        user.cart.push({ name, description, price });
        await user.save();

        res.status(200).json({ msg: 'Item added to cart successfully' });
    } 
    catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error });
    }
}

export default addItemToCart;