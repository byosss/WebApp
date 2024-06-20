import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import Client, { IClient } from '../../models/clientModel';
import CartItemModel, { ICartItem } from '../../models/itemModel';

const addItemToCart = async (req: Request, res: Response) => {

    try {
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        const userId = req.params.userId;
        const item = req.body as ICartItem;

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
        const itemExists = user.cart.find(item => item.id === req.body.id);
        if (itemExists) {
            return res.status(400).json({ msg: 'Item already exists in cart' });
        }

        // Add item to cart
        user.cart.push(item);
        await user.save();

        res.status(200).json({ msg: 'Item added to cart successfully' });
    }
    catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error });
    }
}

export default addItemToCart;