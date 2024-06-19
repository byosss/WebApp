import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';

const updateUser = async (req: Request, res: Response) => {

    const token = req.header('Authorization')?.replace('Bearer ', '') || '';
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    // Check if the user is a client or a comm
    if (decoded.role !== 'client' &&  decoded.role !== 'comm') {
        return res.status(403).json({ msg: 'You are not authorized to access this route' });
    }

    // Check if a client is trying to access another client's data
    if (decoded.role === 'client' && decoded.id !== req.params.userId) {
        return res.status(403).json({ msg: 'You are not authorized to access this route' });
    }

    try {
        // delete the user
        await mongoose.connection.collection('users').deleteOne({ _id: new mongoose.Types.ObjectId(req.params.userId) });
         
        res.status(200).json({ msg: 'User deleted' });
    }
    catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error });
    }

    
};

export default updateUser;