var express = require('express'),
	router = express.Router();

/**
 * @api {get} /api/v1/orders/my Pridobivanje mojih naročil
 * @apiName Na poti
 * @apiGroup Orders
 *
 * @apiParam {String} user_id Kupec
 *
 * @apiSuccess {Array} items Vrne naročila
 * @apiSuccessExample
 * 	HTTP/1.1 200
 * 	[
 * 		{
 * 			item: {
 * 				_id: {String},
 * 		  		name: {String},
 * 				seller: {
 * 					_id: {String},
 * 					name: {String},
 * 					surname: {String}
 * 				},
 * 				quantity: {Number},
 * 				delivery: {Date}
 * 			}
 * 		}
 * 	]
 */
router.get('/my', function(req, res) {
  //TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {get} /api/v1/orders/ Pridobivanje naročil mojih izdelkov
 * @apiName Za dostavo
 * @apiGroup Orders
 *
 * @apiParam {String} user_id Prodajalec
 *
 * @apiSuccess {Array} items Vrne naročila
 * @apiSuccessExample
 * 	HTTP/1.1 200
 * 	[
 * 		{
 * 			item: {
 * 				_id: {String},
 * 		  		name: {String},
 * 				buyer: {
 * 					_id: {String},
 * 					name: {String},
 * 					surname: {String}
 * 				},
 * 				quantity: {Number},
 * 				delivery: {Date}
 * 			}
 * 		}
 * 	]
 */
router.get('/', function(req, res) {
 	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {post} /api/v1/orders/delivered/:order_id Dostavljanje izdelka
 * @apiName Dostavljeno
 * @apiGroup Items
 *
 * @apiParam {String} user_id Kupec
 *
 * @apiSuccessExample
 * 	HTTP/1.1 200
 */
router.post('/delivered/:order_id', function(req, res, next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});



module.exports = router;