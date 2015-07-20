var epflAPI = require("people-epfl-api");
var lodash = require("lodash");
var async = require("async");

function getInfosFromSciper(sciper, callback) {
	sciper = sciper | 0 ; // ensure integer;
	return epflAPI.getInfo(sciper, function(err, result) {
		if(err) {
			callback("NotFound");
		} else {
			var roles = result.roles;
			delete result.roles;
			result.section = "";
			lodash.each(roles, function(role) {
				if (role.role == "Student") {
					result.section = role.section;
				}
			});
			if (result.section === "") {
				callback("Forbidden");
			} else {
				callback(null, result);
			}
		}
	});
};

function subscribeUser (sciper, password, callback) {
	async.waterfall([
		function(callback) {
			User.findOneById("EPFL-"+sciper, function(error, result) {
				if (error) return callback(error);
				else if (result) return callback("Duplicate");
				else return callback(null);
			});
		},
		function(callback) {
			return async.parallel([
				lodash.partial(getInfosFromSciper, sciper),
				lodash.partial(PasswordsService.hashPassword, password)
			], callback);
		},
		function (computedData, callback) {
			var informations = computedData[0];
			informations.password = computedData[1];
			informations.id = "EPFL-" + informations.sciper;
			informations.section = "EPFL-" + informations.section;
			informations.name = informations.fullName;
			delete informations.fullName;
			delete informations.sciper;
			callback(null, informations);
		},
		lodash.bind(User.create, User)
	], callback);
};

module.exports = {
	getInfosFromSciper : getInfosFromSciper,
	subscribeUser: subscribeUser
}
