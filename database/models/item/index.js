/**
 * Shema v bazi:
 * {
 * 	_id : ObjectId,
 * 	name: String,
 * 	description: String,
 * 	photo: GridFsId,
 * 	photos: [
 * 		photo: GridFsId,
 * 		description: String
 * 	],
 * 	seller: User
 * }
 */

var ObjectId = require('mongodb').ObjectID;

var Item = function() {
	/**
	 * Ime izdelka
	 * @type {String}
	 */
	this.name = undefined;

	/**
	 * Opis izdelka
	 * @type {String}
	 */
	this.description = undefined;

	/**
	 * Glavna slika
	 * @type {GridFS}
	 */
	this.photo = undefined;

	/**
	 * Tabela slik
	 * @type {Array}
	 */
	this.photos = [];
};

modle.exports = Item;