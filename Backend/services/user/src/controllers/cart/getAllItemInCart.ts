import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import Client from '../../models/clientModel';


const getAllItemInCart = async (req: Request, res: Response) => {

    try {
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

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

        res.status(200).json(user.cart);
    } 
    catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error });
    }
}

export default getAllItemInCart;