import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import OrderModel from '../models/orderModel';

const updateOrder = async (req: Request, res: Response) => {

    try {
        return res.status(200).send('Order updated');
    }
    catch (err) {
        return res.status(500).send(err);
    }
};

export default updateOrder;