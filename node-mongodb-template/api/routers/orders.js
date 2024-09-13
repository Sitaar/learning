const express = require('express');
const router= express.Router();

const checkAuth = require('../middleware/check-auth');

const ordersController = require('../controllers/orders')

router.get('/',checkAuth,ordersController.get_orders_all);

router.post('/',checkAuth,ordersController.create_order);

router.get('/:orderId',checkAuth,ordersController.get_order_one);

router.delete('/:orderId',checkAuth,ordersController.delete_order);


module.exports = router;