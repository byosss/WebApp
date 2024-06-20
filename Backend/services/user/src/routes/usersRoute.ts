import express from 'express';

import auth from '../controllers/auth';
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import getAllUsers from '../controllers/getAllUsers';
import getUser from '../controllers/getUser';
import updateUser from '../controllers/updateUser';
import deleteUser from '../controllers/deleteUser';

import addItemToCart from '../controllers/cart/addItemToCart';
import getAllItemInCart from '../controllers/cart/getAllItemInCart';
import deleteItemInCart from '../controllers/cart/deleteItemInCart';
import deleteAllItems from '../controllers/cart/deleteAllItems';


const router = express.Router();

router.get('/auth', auth);
router.post('/register', registerController);
router.post('/login', loginController);
router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);

router.post('/:userId/cart', addItemToCart);
router.get('/:userId/cart', getAllItemInCart);
router.delete('/:userId/cart/:itemId', deleteItemInCart);
router.delete('/:userId/cart', deleteAllItems);

export default router;