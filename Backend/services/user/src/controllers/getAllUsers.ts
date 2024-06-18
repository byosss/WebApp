import { Request, Response } from 'express';
import mongoose from 'mongoose';
import jwt, { JwtPayload } from 'jsonwebtoken';

const getAllUsers = async (req: Request, res: Response) => {

    
    const token = req.header('Authorization')?.replace('Bearer ', '') || '';
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    if (decoded.role !== 'comm') {
        return res.status(403).json({ msg: 'You are not authorized to access this route' });
    }
    
    
    try {
        const users = await mongoose.connection.collection('users').find( {}, { projection: { password: 0 } }).toArray();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error });
    }

};

export default getAllUsers;