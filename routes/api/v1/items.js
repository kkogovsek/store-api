var express = require('express'),
	router = express.Router();

/**
 * @api {get} /api/v1/items/:item_id Pridobivanje izdelka in ponudb, ki so na voljo
 * @apiName Izdelek
 * @apiGroup Items
 *
 * @apiSuccess {Object} item Vrne izdelek in ponudbe, ki so na voljo
 * @apiSuccessExample
 * 	HTTP/1.1 200
 * 	{
 * 		_id: {String},
 * 		name: {String},
 * 		description: {String},
 * 		seller: {
 * 			_id: {String},
 * 			name: {String},
 * 			surname: {String}
 * 		},
 * 		image: {String},
 * 		photos: [
 * 			{
 * 				image:{String},
 * 				description: {String}
 * 			}
 * 		],
 * 		offers: [
 * 			{
 * 				_id: {String},
 * 				quantity: {Number},
 * 				price: {Number},
 * 				delivery: {Date}
 * 			}
 * 		]
 * 	}
 */
router.get('/:item_id', function(req,res,next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {get} /api/v1/items/ Pridobivanje izdelkov, ki so na voljo
 * @apiName Izdelki
 * @apiGroup Items
 *
 * @apiSuccess {Array} items Vrne izdelke, ki so na voljo
 * @apiSuccessExample
 * 	HTTP/1.1 200
 * 	[
 * 		{
 * 			_id: {String},
 * 			name: {String},
 * 			seller: {
 * 				_id: {String},
 * 				name: {String},
 * 				surname: {String}
 * 			},
 * 			image: {String},
 * 			avalible: {Number}
 * 		}
 * 	]
 */
router.get('/', function(req,res,next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {post} /api/v1/items/add Dodajanje izdelka
 * @apiName Dodaj
 * @apiGroup Items
 *
 * @apiParam {String} name Ime izdelka
 * @apiParam {String} description Opis izdelka
 * @apiParam {File} [main_photo] Glavna fotografija
 * @apiParam {Files} [photos] Ostale fotografije
 * @apiParam {Array} [photos_descriptions] Opisi ostalih fotografij
 *
 * @apiSuccess HTTP/1.1 200
 * @apiSuccessExample
 * 	HTTP/1.1 200
 */
router.post('/add', function(req,res,next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {post} /api/v1/items/update/:item_id Dodajanje izdelka
 * @apiName Dodaj
 * @apiGroup Items
 *
 * @apiParam {String} item_id Id izdelka
 * @apiParam {String} [description] Opis izdelka
 * @apiParam {File} [main_photo] Nova glavna fotografija
 * @apiParam {Files} [photos] Nove fotografije
 * @apiParam {Array} [photos_descriptions] Opisi ostalih fotografij
 *
 * @apiSuccess HTTP/1.1 200
 * @apiSuccessExample
 * 	HTTP/1.1 200
 */
router.post('/add', function(req,res,next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

module.exports = router;