var app = angular.module("tournament-system.resources");

app.service("Tournament", ["sailsResource", function(sailsResource) {
	var Tournament = sailsResource("Tournament", {
	},{
		verbose : true,
	});
	return Tournament;
}]);

