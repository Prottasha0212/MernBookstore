import express from 'express';
import { decreaseStock, getOrdersByBuyer, getOrdersBySeller, deleteOrder, getAllOrders, getOrderByOrderNumber, updateOrderStatusByOrderNumber } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/decrease-stock', decreaseStock);
router.get('/buyer', getOrdersByBuyer);
router.get('/admin/all', getAllOrders);
router.delete('/:id', deleteOrder);
router.get('/seller', getOrdersBySeller);
router.get('/:orderNumber', getOrderByOrderNumber);
router.patch('/status/:orderNumber', updateOrderStatusByOrderNumber);

export default router;
