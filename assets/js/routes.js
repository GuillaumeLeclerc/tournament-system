var app = angular.module("tournament-system");

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl : "templates/home.html",
			controller : "HomeController"
		}).
		when("/404", {
			templateUrl : "templates/404.html"
		}).
		otherwise({
			redirectTo : "/404"
		});
}]);
