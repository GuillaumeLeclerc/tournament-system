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
	}
}
