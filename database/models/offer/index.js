/**
 * Zapis v bazi:
 * {
 * 	_id: ObjectId,
 * 	quantity: Number,
 * 	avalible: Number,
 * 	delivery: Date,
 * 	start: Date,
 * 	end: Date,
 * 	price: Number,
 * 	seller: {
 * 		_id: ObjectId,
 * 		name: String,
 * 		surname: String
 * 	},
 * 	item: {
 * 		_id: ObjectId,
 * 		name: String,
 * 		photo: GridFs
 * 	}
 * }
 */

var ObjectId = require('mongodb').ObjectID;

var Offer = function() {
	/**
	 * Na voljo
	 * @type {Number}
	 */
	this.quantity = undefined;

	/**
	 * Trenutno na voljo
	 * @type {Number}
	 */
	this.avalible = undefined;

	/**
	 * Dostava
	 * @type {Date}
	 */
	this.delivery = undefined;

	/**
	 * Začetek ponudbe
	 * @type {Date}
	 */
	this.start = undefined;

	/**
	 * Konec ponudbe
	 * @type {Date}
	 */
	this.end = undefined;

	/**
	 * Cena
	 * @type {Number}
	 */
	this.price = undefined;

	/**
	 * Podatki o prodajalcu
	 * @type {Object}
	 */
	this.seller = {};

	/**
	 * Podatki o izdelku
	 * @type {Object}
	 */
	this.item = {};
};

module.exports = Offer;