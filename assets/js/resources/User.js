var app = angular.module("tournament-system.resources");

app.service("User", ["sailsResource", function(sailsResource) {
	var User = sailsResource("User", {
		login : {
			method : "POST",
			url : "/user/login"
		}
	},{
		verbose : true,
	});
	window.User = User;
	return User;
}]);

