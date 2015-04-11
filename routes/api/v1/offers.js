var express = require('express'),
	router = express.Router();

/**
 * @api {post} /api/v1/offers/add Dodajanje ponudbe
 * @apiName Dodaj
 * @apiGroup Offers
 *
 * @apiParam {String} item_id Id izdelka
 * @apiParam {Number} quantity Število izdelkov na zalogi
 * @apiParam {DateTime} delivery Datum dostave
 * @apiParam {DateTime} end Čas zaključka ponudbe
 * @apiParam {DateTime} start Čas začetka ponudbe
 * @apiSuccess HTTP/1.1 200
 * @apiSuccessExample
 * 	HTTP/1.1 200
 */
router.post('/add', function(req, res, next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

/**
 * @api {get} /api/v1/offers/:item_id Pridobivanje ponudb za izdelek, ki so na voljo
 * @apiName Pridobi
 * @apiGroup Offers
 *
 * @apiSuccess {Array} items Vrne ponudbe, ki so na voljo
 * @apiSuccessExample
 * 	HTTP/1.1 200
 * 	[
 * 		{
 * 			_id: {String},
 * 			delivery: {DateTime},
 * 			avalibile: {Number}
 * 		}
 * 	]
 */
router.get('/:item_id', function(req, res, next) {
	//TODO
	return next({status:501,message:"Not yet implemented"},req, res);
});

module.exports = router;