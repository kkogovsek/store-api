var MongoClient = require('mongodb').MongoClient,
	config = require('../config/').mongo;

var _db;

module.exports = function() {
	return {
		isConnected: function() {
			if(_db == undefined) {
				return false;
			}
			else {
				return true;
			}
		},
		connect: function() {
			var url = "mongodb://" + config.server + ":" + config.port + "/" + config.database;
			MongoClient.connect(url, function(err, db) {
				if(err) {
					throw new Error("Couldn't connect to database");
				}
				else {
					_db = db;
				}
			});
		},
		getDatabase: function() {
			return _db;
		}
	};
}

