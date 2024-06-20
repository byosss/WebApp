import e, { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import OrderModel from '../models/orderModel';

const getOrders = async (req: Request, res: Response) => {

    try {
        // check if user is client
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        if (decoded.role === 'client') {
            // get all orders of the client by userId
            const orders = await OrderModel.find({ userId: decoded.id });

            return res.status(200).send(orders);
        }
        else if (decoded.role === 'restorer') {
            // get all orders of the restaurant by restaurantId
            const orders = await OrderModel.find({ restaurantId: decoded.id });

            return res.status(200).send(orders);
        }
        else if (decoded.role === 'deliverer') {
            // get all orders of the deliverer by delivererId
            const orders = await OrderModel.find({ delivererId: decoded.id });

            return res.status(200).send(orders);
        }
        else if (decoded.role === 'comm') {
            // get all orders
            const orders = await OrderModel.find();

            return res.status(200).send(orders);
        }
    } 
    catch (err) {
        return res.status(500).send(err);
    }
};

export default getOrders;