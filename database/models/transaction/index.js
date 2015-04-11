/**
 * Zapis v bazi:
 * {
 * 	from: {
 * 		_id: ObjectId,
 * 		name: String,
 * 		surname: String
 * 	},
 * 	to: {
 * 		_id: ObjectId,
 * 		name: String,
 * 		surname: String
 * 	},
 * 	quantity: Number
 * }
 */

var ObjectId = require('mongodb').ObjectID;

var Transaction = function() {
	/**
	 * Pošiljatel
	 * @type {Object}
	 */
	this.from = {};

	/**
	 * Prejemnik
	 * @type {Object}
	 */
	this.to = {};

	/**
	 * Vsota
	 * @type {Number}
	 */
	this.quantity = undefined;
};

module.exports = Transaction;