import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import RestaurantModel from '../../models/restaurantModel';
import MenuModel from '../../models/menuModel';

const createMenu = async (req: Request, res: Response) => {

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

        // Create the menu
        const newMenu = new MenuModel(req.body);

        await newMenu.validate();

        restaurant.menus.push(newMenu);

        await restaurant.save();

        res.status(200).json({ message: 'Menu created successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request', error });
    }
};

export default createMenu;