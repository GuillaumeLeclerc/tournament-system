var async = require("async");
module.exports = {

	subscribe : function(req, res) {
		res.view("subscribe");
	},

	subscribeEPFLStudent : function(req, res) {
		EPFLService.subscribeUser(req.param("sciper"), req.param("password"), function(error) {
			if (error == "NotFound" || error == "Forbidden") {
				res.badRequest();
			} else if(error == "Duplicate") {
				res.statusCode = 302;
				res.end();
			} else if (!error) {
				res.statusCode = 201;
				res.end();
			} else {
				sails.log.error(error);
				res.serverError();
			}
		});
	},

	getInfoFromSciper : function(req, res) {
		EPFLService.getInfosFromSciper(req.param("sciper"), function(error, results) {
			if (error == "NotFound") {
				return res.notFound();
			} else if(error === "Forbidden") {
				return res.forbidden();
			} else if (!error) {
				return res.json(results);
			} else {
				sails.log.error(error);
				res.serverError();
			}
		});
	},

	me : function(req, res) {
		if (req.session.authenticated) {
			res.json(req.session.user);
		} else {
			User.findOne({id : "guest"}, function(error, result) {
				if (error) {
					sails.log.error(error);
					res.serverError();
				} else if (!result) {
					sails.log.error("guest account not found, Please create an accound with id=guest and the lowest rights possible");
					res.serverError();
				} else {
					res.json(result);
				}
			});	
		}
	},

	logout : function(req, res) {
		req.session.authenticated = false;
		req.session.user = {};
		res.statusCode = 200;
		res.end();
	},

	login : function(req, res) {
		if (req.method === "POST" && req.wantsJSON) {
			var email = req.param("email");
			var password = req.param("password");
			var userInfos = null;
			async.waterfall([
				function(callback) {
					User.findOne({email : email}, function(error, res) {
						if (error) {
							return callback(error);
						} else if (res) {
							userInfos = res;
							return callback (null, res.password);
						} else {
							return callback("NotFound");
						}
					});
				},
				PasswordsService.comparePassword.bind(PasswordsService, password)
			], function(error, isMatching) {
				if (!isMatching || error === "NotFound") {
					res.forbidden();
				} else if (error) {
					sails.log.error(error);
					res.serverError();
				} else {
					req.session.authenticated = true;
					req.session.user = userInfos;
					res.statusCode = 200;
					res.end();
				}
			});
		} else {
			res.view("login");
		}
	}
}
