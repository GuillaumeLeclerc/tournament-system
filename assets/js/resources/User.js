var app = angular.module("tournament-system.resources");

app.service("User", ["sailsResource", function(sailsResource) {
	var User = sailsResource("User", {
		login : {
			method : "POST",
			url : "/user/login"
		},
		notifications : {
			method : "GET",
			url : "/user/:id/notifications",
			isArray : true
		},
		logout : {
			method : "GET",
			url : "/user/logout",
		}
	},{
		verbose : true,
	});
	return User;
}]);

