var lodash = require("lodash");

module.exports = {
	index : function(req, res) {
		res.view("myTeams");
	},
	getMyTeams : function(req, res) {
		var leader = req.session.user.id;
		Team.find({leader : leader}).populate("leader").populate("members").exec(function(error, results) {
			if (error) {
				sails.log.error(error);
				return res.serverError();
			} else {
				res.json(lodash.map(results, function(team) {
					return team.getOutputForm(leader);
				}));
			}
		});
	},

	create : function(req, res) {
		var name = req.param("name");
		var leader = req.session.user.id;
		Team.create({
			leader : leader,
			name : name,
			members : []
		}, function (error) {
			if (error) {
				sails.log.error(error);
				res.serverError();
			} else {
				res.statusCode = 201;
				res.end();
			}
		});
	},

	delete : function(req, res) {
		var id = req.param("id");
		Team.destroy({
			id : id
		}, function(error) {
			if (error) {
				sails.log.error(error);
				res.serverError();
			} else {
				res.statusCode = 202;
				res.end();
			}
		});
	},

	getAuthorizedUsers : function(req, res) {
		User.find({}).exec(function(error, results) {
			res.json(lodash.pluck(results, "name"));
		});
		sails.log.error("onch onch");
	}
}
