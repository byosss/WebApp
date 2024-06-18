import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const auth = async (req: Request, res: Response) => {

    const token = req.header('Authorization')?.replace('Bearer ', '') || '';
    
    // Check if token exists
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    
    // Check if token is valid
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        return res.status(200).json({ message: 'Authenticated' });
    } 
    catch (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
    
}

export default auth;