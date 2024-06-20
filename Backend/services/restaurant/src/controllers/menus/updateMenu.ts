import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import RestaurantModel from '../../models/restaurantModel';
import MenuModel from '../../models/menuModel';

const updateMenu = async (req: Request, res: Response) => {

    try {
        // Check if the user is a restorer
        const token = req.header('Authorization')?.replace('Bearer ', '') || '';
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        // Check if the user is a restorer
        if (decoded.role !== 'restorer') {
            return res.status(403).json({ message: 'You are not authorized to perform this operation' });
        }

        // Check if the user is the owner of the restaurant
        const restaurant = await RestaurantModel.findById(req.params.restaurantId);

        // Check if the restaurant exists
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // Check if the user is the owner of the restaurant
        if (decoded.id !== restaurant.ownerId) {
            return res.status(403).json({ message: 'You are not authorized to perform this operation' });
        }

        // Check if the menu exists
        const menu = restaurant.menus.find(menu => menu.id === req.params.menuId);

        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }

        // Update the menu
        Object.assign(menu, req.body);

        await restaurant.save();

        res.status(200).json({ message: 'Menu updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request', error });
    }
};

export default updateMenu;