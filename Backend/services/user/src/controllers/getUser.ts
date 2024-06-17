import { Request, Response } from 'express';
import mongoose from 'mongoose';

const getUser = async (req: Request, res: Response) => {

    // Check if the user is a client or a comm
    if (req.cookies.userRole !== 'client' &&  req.cookies.userRole !== 'comm') {
        return res.status(403).json({ msg: 'You are not authorized to access this route' });
    }

    // Check if a client is trying to access another client's data
    if (req.cookies.userRole === 'client' && req.cookies.userId !== req.params.id) {
        return res.status(403).json({ msg: 'You are not authorized to access this route' });
    }

    try {
        const user = await mongoose.connection.collection('users').findOne({ _id: new mongoose.Types.ObjectId(req.params.id) }, { projection: { password: 0 } });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error });
    }

};

export default getUser;