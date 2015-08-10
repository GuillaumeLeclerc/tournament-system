var app = angular.module("tournament-system");

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl : "templates/home.html",
			controller : "HomeController"
		}).
		otherwise({
			redirectTo : "/"
		});
}]);
