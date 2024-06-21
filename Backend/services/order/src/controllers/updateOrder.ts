import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';

import OrderModel from '../models/orderModel';

const updateOrder = async (req: Request, res: Response) => {

    // Check if the order exists
    const order = await OrderModel.findOne({ _id: req.params.orderId });

    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }

    // Check if the user is the owner of the order
    const token = req.header('Authorization')?.replace('Bearer ', '') || '';
    const decodedToken = jwt.decode(token as string) as JwtPayload;

    if (decodedToken.role === 'deliverer') {
        
        if (order.delivererId !== decodedToken.id) {
            return res.status(403).json({ error: 'You are not the owner of the order' });
        }

        // update the order
        const updatedOrder = await OrderModel.findOneAndUpdate({ _id: req.params.order }, req.body , { new: true });
        return res.status(200).json(updatedOrder);
    }
    else if (decodedToken.role === 'restorer') {
        
        // check if the order is from the restaurant
        const restaurant = await mongoose.connection.collection('restaurants').findOne({ ownerId: decodedToken.id });
        
        if (!restaurant) {
            return res.status(403).json({ error: 'You are not the owner of the order' });
        }
        console.log(restaurant);
        console.log(order.restaurantId);
        console.log(restaurant._id.toString());
        if (!restaurant || order.restaurantId !== restaurant._id.toString()) {
            return res.status(403).json({ error: 'You are not the owner of the order' });
        }

        // update the order
        await order.updateOne(req.body);
        
        
        return res.status(200).json( {message: 'Order updated successfully' });
        
    }
};

export default updateOrder;