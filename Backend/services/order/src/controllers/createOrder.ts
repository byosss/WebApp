import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import OrderModel from '../models/orderModel';

const createOrder = async (req: Request, res: Response) => {

    try {
        const { items, restaurantId } = req.body;

        // check if user is client
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        if (decoded.role !== 'client') {
            return res.status(403).send('Forbidden');
        }

        // calculate price
        const price = items.reduce((acc: number, item: { price: number }) => acc + item.price, 0);
        
        // create order
        const newOrder = new OrderModel({
            userId: decoded.id,
            restaurantId: restaurantId,
            delivererId: null,
            items: items,
            price: price,
            createdAt: new Date(),
            deliveredAt: null,
            status: 'Preparing'
        });

        await newOrder.save();

        return res.status(201).send(newOrder);
    } 
    catch (err) {
        return res.status(500).send(err);
    }
}

export default createOrder;