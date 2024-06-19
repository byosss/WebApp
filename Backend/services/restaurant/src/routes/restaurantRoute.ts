import express from 'express';

import getAllRestaurants from '../controllers/restaurants/getAllRestaurants';
import getRestaurant from '../controllers/restaurants/getRestaurant';
import createRestaurant from '../controllers/restaurants/createRestaurant';
import updateRestaurant from '../controllers/restaurants/updateRestaurant';
import deleteRestaurant from '../controllers/restaurants/deleteRestaurant';

import createItem from '../controllers/items/createItem';
import getAllItems from '../controllers/items/getAllItems';
import getItem from '../controllers/items/getItem';
import updateItem from '../controllers/items/updateItem';
import deleteItem from '../controllers/items/deleteItem';

import createMenu from '../controllers/menus/createMenu';
import getAllMenus from '../controllers/menus/getAllMenus';
import getMenu from '../controllers/menus/getMenu';
import updateMenu from '../controllers/menus/updateMenu';
import deleteMenu from '../controllers/menus/deleteMenu';

const router = express.Router();

router.post('/', createRestaurant);
router.get('/', getAllRestaurants);
router.get('/:restaurantId', getRestaurant);
router.patch('/:restaurantId', updateRestaurant);
router.delete('/:restaurantId', deleteRestaurant);

router.post('/:restaurantId/items', createItem);
router.get('/:restaurantId/items', getAllItems);
router.get('/:restaurantId/items/:itemId', getItem);
router.patch('/:restaurantId/items/:itemId', updateItem);
router.delete('/:restaurantId/items/:itemId', deleteItem);

router.post('/:restaurantId/menus', createMenu);
router.get('/:restaurantId/menus', getAllMenus);
router.get('/:restaurantId/menus/:menuId', getMenu);
router.patch('/:restaurantId/menus/:menuId', updateMenu);
router.delete('/:restaurantId/menus/:menuId', deleteMenu);

export default router;