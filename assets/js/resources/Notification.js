var app = angular.module("tournament-system.resources");

app.service("Notification", ["sailsResource", function(sailsResource) {
	var User = sailsResource("Notification");
	return User;
}]);

