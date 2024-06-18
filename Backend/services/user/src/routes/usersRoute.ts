import express from 'express';

import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';
import getAllUsers from '../controllers/getAllUsers';
import getUser from '../controllers/getUser';
import auth from '../controllers/auth';

const router = express.Router();

router.get('/auth', auth);
router.post('/register', registerController);
router.post('/login', loginController);
router.get('/', getAllUsers);
router.get('/:id', getUser);

export default router;