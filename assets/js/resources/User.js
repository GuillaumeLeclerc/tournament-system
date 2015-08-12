var app = angular.module("tournament-system.resources");

app.service("User", ["sailsResource", function(sailsResource) {
	var User = sailsResource("User");
	return User;
}]);

