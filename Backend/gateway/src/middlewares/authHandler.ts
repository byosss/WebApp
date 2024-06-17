import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const publicRoutes = [
    { path: '/users/login', method: 'POST' },
    { path: '/users/register', method: 'POST' },
    { path: '/restaurants', method: 'GET' },
    { path: '/restaurants/:id', method: 'GET' },
];

// Middleware d'authentification
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '') || '';

    // Check if the route is public
    for (const publicRoute of publicRoutes) {
        
        // Check path
        if (req.path === publicRoute.path && req.method === publicRoute.method) {
            return next();
        }
        
        // Check path with params
        if (publicRoute.path.includes(':')) {
            const pathRegex = new RegExp(publicRoute.path.replace(/:[a-zA-Z]+/g, '[a-zA-Z0-9]+'));
            if (pathRegex.test(req.path) && req.method === publicRoute.method) {
                return next();
            }
        }

    }

    // Check if token exists
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Check if token is valid
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        res.cookie('userId', decoded.id);
        res.cookie('userRole', decoded.role);

        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default authMiddleware;