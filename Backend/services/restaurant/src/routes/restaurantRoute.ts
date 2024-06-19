import express from 'express';
import getAllRestaurants from '../controllers/getAllRestaurants';
import getRestaurant from '../controllers/getRestaurant';
import createRestaurant from '../controllers/createRestaurant';

const router = express.Router();

router.get('/', getAllRestaurants);
router.get('/:id', getRestaurant);
router.post('/', createRestaurant);

export default router;
