import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const authController = (req: Request, res: Response) => {

    const token = req.header('Authorization')?.replace('Bearer ', '') || '';

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        
        res.status(200).json({ msg: 'Authentication successful'});
    } 
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }

};

export default authController;