var app = angular.module("tournament-system");

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl : "templates/home.html",
			controller : "HomeController"
		}).
		when("/profile", {
			templateUrl : "templates/profile.html",
			controller : "ProfileController"
		}).
		when("/tournaments", {
			templateUrl : "templates/tournamentList.html",
			controller : "TournamentListController",
		}).
		when("/subscription", {
			templateUrl : "templates/subscription.html",
			controller : "SubscriptionController"
		}).
		when("/404", {
			templateUrl : "templates/404.html"
		}).
		otherwise({
			redirectTo : "/404"
		});
}]);
