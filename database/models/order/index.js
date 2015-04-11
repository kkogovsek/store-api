/**
 * Zapis v bazi:
 * {
 * 	_id: ObjectId,
 * 	offer: {
 * 		_id: ObjectId,
 * 		name: String,
 * 		photo: GridFs,
 * 		price: Number
 * 	},
 * 	seller: {
 * 		_id: ObjectId,
 * 		name: String,
 * 		surname: String
 * 	},
 * 	buyer: {
 * 		_id: ObjectId,
 * 		name: String,
 * 		surname: String
 * 	},
 * 	quantity: Number,
 * 	padi: Number|bool
 * }
 */

var ObjectId = require('mongodb').ObjectID;

var Order = function() {
	/**
	 * Podatki o ponudbi
	 * @type {Object}
	 */
	this.offer = {};

	/**
	 * Podatki o proizvajalcu
	 * @type {Object}
	 */
	this.seller = {};

	/**
	 * Podatki o kupcu
	 * @type {Object}
	 */
	this.buyer = {};

	/**
	 * Količina
	 * @type {Number}
	 */
	this.quantity = undefined;

	/**
	 * Plačano, lahko ali true ali koliko je že plačanega
	 * @type {[type]}
	 */
	this.paid = undefined;
};

module.exports = Order;