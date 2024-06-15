import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';


const publicRoutes = [
    { path: '/users/login', method: 'POST' },
    { path: '/users/register', method: 'POST' },
    { path: '/restaurants', method: 'GET' }
];

// Middleware d'authentification
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '') || '';

    // Check if the route is public
    if (publicRoutes.some(route => route.path === req.path && route.method === req.method)) {
        return next();
    }

    // Check if token exists
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Check if token is valid
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        req.body.userId = decoded.id;
        req.body.role = decoded.role;

        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default authMiddleware;