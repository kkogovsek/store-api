var express = require('express')
	router = express.Router(),
	carts = require('./carts.js'),
	payments = require('./payments.js'),
	orders = require('./orders.js'),
	items = require('./items.js'),
	offers = require('./offers.js');

router.use('/carts/', carts);
router.use('/payments/', payments);
router.use('/orders/', orders);
router.use('/items/', items);
router.use('/offers/', offers);

module.exports = router;
