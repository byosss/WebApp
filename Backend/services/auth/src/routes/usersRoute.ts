import express from 'express';

import authController from '../controllers/authController';
import registerController from '../controllers/registerController';
import loginController from '../controllers/loginController';

const router = express.Router();

// Routes pour l'authentification
router.get('/auth', authController);
router.post('/register', registerController);
router.post('/login', loginController);


export default router;