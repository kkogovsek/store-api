var express = require('express'),
	router = express.Router();

/**
 * @api {post} /api/v1/carts/checkout Sprememba vozička v naročilo
 * @apiName Potrdi
 * @apiGroup Carts
 *
 * @apiSuccess HTML/1.1 200 Successfull
 * @apiSuccessExample
 * 	HTTP/1.1 200 Successfull
 */
router.post('/checkout', function(req, res, next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {post} /api/v1/carts/remove/:item_id Odstranjevanje izdelkov iz vozička
 * @apiName Odstrani
 * @apiGroup Carts
 *
 * @apiParam {String} item_id Id želenega izdelka
 * @apiParam {Number} quantity Količina izdelkov, ki jih želimo odstraniti 
 *
 * @apiSuccess HTML/1.1 200 Successfull
 * @apiSuccessExample
 * 	HTTP/1.1 200 Successfull
 */
router.post('/remove', function(req, res, next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {post} /api/v1/carts/:item_id Dodajanje izdelkov v voziček
 * @apiName Dodanjanj
 * @apiGroup Carts
 *
 * @apiParam {String} item_id Id želenega izdelka
 * @apiParam {Number} quantity Količina izdelkov, ki jih želimo dodati 
 *
 * @apiSuccess HTML/1.1 200 Successfull
 * @apiSuccessExample
 * 	HTTP/1.1 200 Successfull
 */
router.post('/:item_id', function(req, res, next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {get} /api/v1/carts/ Pridobi vsebino vozička
 * @apiName Vsebina
 * @apiGroup Carts
 *
 * @apiSuccess {Array} cart Vsebina vozička
 * @apiSuccessExample
 * 	HTTP/1.1 200 Successfull
 * 	[
 * 		{
 * 			item: {
 * 				_id: {String},
 * 				name: {String},
 * 				seller: {
 * 					_id: {String},
 * 					name: {String},
 * 					surname: {String}
 * 				},
 * 				quantity: {Number},
 * 				price: {Number}
 * 			}
 * 		}
 * 	]
 */
router.get('/', function(req, res, next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

module.exports = router;