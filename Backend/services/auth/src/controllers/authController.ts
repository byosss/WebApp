import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const permissions: { [key: string]: string[] } = {
    '/orders': ['client', 'deliverer'],
    '/restaurants': ['client', 'deliverer', 'restaurateur'],
};

const authController = (req: Request, res: Response) => {

    const token = req.header('Authorization')?.replace('Bearer ', '') || '';

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        
        const path = req.get('X-Original-URI')?.split('?')[0] || '';
        const method = req.method.toLowerCase();
        const allowedRoles = permissions[path];
        
        console.log(path)
        console.log(method)
        console.log(decoded.role)
        console.log(allowedRoles)

        if (!allowedRoles || !allowedRoles.includes(decoded.role)) {
            return res.status(403).json({ msg: 'You do not have the required permissions' });
        }


        
        res.status(200).json({ msg: 'Authentication successful'});
    } 
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }

};

export default authController;