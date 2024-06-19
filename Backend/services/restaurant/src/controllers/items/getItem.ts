import { Request, Response } from 'express';

import RestaurantModel from '../../models/restaurantModel';

const getItem = async (req: Request, res: Response) => {

    try {
        // Check if the user is the owner of the restaurant
        const restaurant = await RestaurantModel.findById(req.params.restaurantId);

        // Check if the restaurant exists
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // get an item of the restaurant
        const item = restaurant.items.find(item => item.id === req.params.itemId);

        res.status(200).json(item);
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request', error });
    }
};

export default getItem;