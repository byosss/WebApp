import { Request, Response } from 'express';

import RestaurantModel from '../../models/restaurantModel';

const getMenu = async (req: Request, res: Response) => {

    try {
        const restaurant = await RestaurantModel.findById(req.params.restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        const menu = restaurant.menus.find(menu => menu.id === req.params.menuId);

        if (!menu) {
            return res.status(404).json({ message: 'Menu not found' });
        }

        res.status(200).json(menu);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request', error });
    }
};

export default getMenu;