import express from 'express';
import getAllRestaurants from '../controllers/getAllRestaurants';
import getRestaurant from '../controllers/getRestaurant';

const router = express.Router();

router.get('/', getAllRestaurants);
router.get('/:id', getRestaurant);

export default router;
