var express = require('express'),
	router = express.Router();


/**
 * @api {get} /api/v1/payments/my Pridobivanje mojih plačil
 * @apiName Plačal
 * @apiGroup Payments
 *
 * @apiParam {String} user_id Kupec
 *
 * @apiSuccess {Array} items Vrne plačila
 * @apiSuccessExample
 * 	HTTP/1.1 200
 * 	[
 * 		{
 * 			item: {
 * 				_id: {String},
 * 				reciever: {
 * 					_id: {String},
 * 					name: {String},
 * 					surname: {String}
 * 				},
 * 				quantity: {Number}
 * 			}
 * 		}
 * 	]
 */
router.get('/my', function(req, res) {
  //TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {get} /api/v1/orders/ Pridobivanje plačil meni
 * @apiName Plačano meni
 * @apiGroup Payments
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
 * 				sender: {
 * 					_id: {String},
 * 					name: {String},
 * 					surname: {String}
 * 				},
 * 				quantity: {Number}
 * 			}
 * 		}
 * 	]
 */
router.get('/', function(req, res) {
 	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {get} /api/v1/payments/balance Pridobivanje mojega stanja
 * @apiName Stanje
 * @apiGroup Payments
 *
 * @apiParam {String} user_id Me
 *
 * @apiSuccess {Array} items Vrne naročila
 * @apiSuccessExample
 * 	HTTP/1.1 200
 * 	{
 * 		balance: {Number}
 * 	}
 */
router.get('/balance', function(req, res) {
 	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {post} /api/v1/payments/:user_id Plačilo uporabnika
 * @apiName Plačano
 * @apiGroup Payments
 *
 * @apiParam {String} user_id Kupec
 *
 * @apiSuccessExample
 * 	HTTP/1.1 200
 */
router.post('/delivered/:user_id', function(req, res, next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

module.exports = router;