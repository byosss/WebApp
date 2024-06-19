import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const publicRoutes = [
    { method: 'POST', path: '/api/users/register' },
    { method: 'POST', path: '/api/users/login' },
    { method: 'GET', path: '/api/orders' },
];

const auth = async (req: Request, res: Response) => {

    console.log('le req:', req.method, req.baseUrl, req.url);
    console.log('le bon req: ', req.header('X-Original-URI'), req.header('X-Original-Method'));
    
    if (publicRoutes.some(route => { return route.method === req.header('X-Original-Method') && route.path === req.header('X-Original-URI'); })) {
        return res.status(200).send();
    }

    const token = req.header('Authorization')?.replace('Bearer ', '') || '';

    // Check if token exists
    if (!token) {
        return res.status(401).send('No token, authorization denied');
    }
    
    // Check if token is valid
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        return res.status(200).send();
    } catch (err) {
        return res.status(401).send('Token is not valid');
    }
};

export default auth;