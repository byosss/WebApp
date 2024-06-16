import { Request, Response } from 'express';
import RestaurantModel from '../models/restaurantModel';

const getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const restaurants = await RestaurantModel.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des restaurants', error });
    }
};

export default getAllRestaurants;