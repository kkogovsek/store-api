/**
 * Shema v bazi:
 * {
 * 	_id: ObjectId,
 * 	user: ObjectId,
 * 	state: Bool,
 * 	items: [
 * 		item: Offer,
 * 		quantity: Number
 * 	]
 * }
 */

var ObjectId = require('mongodb').ObjectID;

/**
 * Konstruktor
 */
var Cart = function() {
	/**
	 * ObjectId uporabnika
	 * @type {ObjectId}
	 */
	this.user = undefined;

	/**
	 * Stanje vozicka
	 * @type {Bool}
	 */
	this.state = undefined;

	/**
	 * Array izdelkov v košarici
	 * @type {Array}
	 */
	this.items = [];
};

Cart.prototype.ACTIVE = true;
Cart.prototype.INACTIVE = false;

module.exports = Cart;