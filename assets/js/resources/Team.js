var app = angular.module("tournament-system.resources");

app.service("Team", ["sailsResource", function(sailsResource) {
	var Team = sailsResource("Team", {
	},{
		verbose : true,
	});
	return Team;
}]);

