import express from 'express';

import createOrder from '../controllers/createOrder';

const router = express.Router();

router.post('/orders', createOrder);




export default router;