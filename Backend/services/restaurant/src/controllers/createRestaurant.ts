import { Request, Response } from 'express';
import RestaurantModel from '../models/restaurantModel';

const createRestaurant = async (req: Request, res: Response) => {
    try {
        const newRestaurant = new RestaurantModel(req.body);

        await newRestaurant.validate();

        await newRestaurant.save();

        res.status(201).json({ message: 'Restaurant created successfully', id: newRestaurant.id });
    } 
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request', error });
    }
};

export default createRestaurant;