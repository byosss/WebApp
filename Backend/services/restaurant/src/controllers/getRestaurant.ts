import { Request, Response } from 'express';
import RestaurantModel from '../models/restaurantModel';

const getRestaurant = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const restaurant = await RestaurantModel.findById(id);
        res.status(200).json(restaurant);
    } 
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du restaurant', error });
    }
}

export default getRestaurant;