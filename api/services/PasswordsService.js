var bcrypt = require("bcrypt");
var async = require("async");
var lodash = require("lodash");

module.exports = {
	hashPassword : function(password, callback) {
		async.waterfall([
			lodash.bind(bcrypt.genSalt, bcrypt),
			lodash.bind(bcrypt.hash, bcrypt, password)
		], callback);
	},
	comparePassword : bcrypt.compare.bind(bcrypt)
}
