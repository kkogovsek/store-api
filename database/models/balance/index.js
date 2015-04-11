/**
 * Shema v bazi:
 * {
 * 	_id: {ObjectId},
 * 	debtor: {ObjectId},
 * 	loaner: {ObjectId},
 * 	quantity: {Number};
 * }
 */

var ObjectId = require('mongodb').ObjectID;

/**
 * Konstruktor
 */
var Balance = function() {
	/**
	 * Komu je dolžen
	 * @type {ObjectId}
	 */
	this.loaner = undefined;
	/**
	 * Kdo je dolžen
	 * @type {ObjectId}
	 */
	this.debtor = undefined;
	/**
	 * Koliko je dolžen
	 * @type {Float}
	 */
	this.quantity = undefined;
};

module.exports = Balance;