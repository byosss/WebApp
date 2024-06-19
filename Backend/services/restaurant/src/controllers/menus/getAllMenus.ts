import { Request, Response } from 'express';

import RestaurantModel from '../../models/restaurantModel';


const getAllMenus = async (req: Request, res: Response) => {

    try {
        const restaurant = await RestaurantModel.findById(req.params.restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        res.status(200).json(restaurant.menus);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request', error });
    }
};

export default getAllMenus;