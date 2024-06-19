import express from 'express';

import auth from '../controllers/auth';
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import getAllUsers from '../controllers/getAllUsers';
import getUser from '../controllers/getUser';
import updateUser from '../controllers/updateUser';
import deleteUser from '../controllers/deleteUser';


const router = express.Router();

router.get('/auth', auth);
router.post('/register', registerController);
router.post('/login', loginController);
router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;