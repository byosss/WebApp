import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import Client from '../../models/clientModel';

const deleteItemInCart = async (req: Request, res: Response) => {

    try {

        /*
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        const userId = req.params.userId;
        const itemId = req.params.itemId;

        // Check user id
        if (userId !== decoded.id) {
            return res.status(401).json({ msg: 'Unauthorized' });
        }

        // Check if user exists
        const user = await Client.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Check if item exists
        
        const item = user.cart.id(itemId);
        if (!item) {
            return res.status(404).json({ msg: 'Item not found' });
        }

        // Delete item from cart
        item.remove();
        await user.save();
        */
        res.status(200).json({ msg: 'Item deleted from cart successfully' });
    } 
    catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error });
    }
}