import express from 'express';

import createOrder from '../controllers/createOrder';
import getOrder from '../controllers/getOrders';
import updateOrder from '../controllers/updateOrder';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrder);
router.patch('/:orderId', updateOrder);

export default router;