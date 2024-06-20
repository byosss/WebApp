import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const publicRoutes = [
    { method: 'POST', path: '/api/users/register' },
    { method: 'POST', path: '/api/users/login' },
    { method: 'GET', path: '/api/restaurants' },
    { method: 'GET', path: '/api/restaurants/:restaurantId' },
    { method: 'GET', path: '/api/restaurants/:restaurantId/items' },
    { method: 'GET', path: '/api/restaurants/:restaurantId/items/:itemId' },
    { method: 'GET', path: '/api/restaurants/:restaurantId/menus' },
    { method: 'GET', path: '/api/restaurants/:restaurantId/menus/:menuId' },
];

const auth = async (req: Request, res: Response) => {

    const method = req.header('X-Original-Method');
    const path = req.header('X-Original-URI');
    const token = req.header('Authorization')?.replace('Bearer ', '') || '';
 
    if (!method || !path) {
        return res.status(400).send('Invalid request');
    }

    const isPublic = publicRoutes.some(route => {
        const routePathRegex = new RegExp(`^${route.path.replace(/:\w+/g, '[^/]+')}$`);
        return route.method === method && routePathRegex.test(path);
    });

    if (isPublic) {
        return res.status(200).send();
    }

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