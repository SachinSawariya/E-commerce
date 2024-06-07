import express from 'express'

import { getProducts, placeOrder } from '../controllers/product.controller.js';
const router = express.Router();

router.get('/products', getProducts);
router.post('/order', placeOrder);

export default router;
