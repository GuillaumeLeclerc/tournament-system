var app = angular.module("tournament-system");

app.controller("HomeController", ["$scope", "NotificationService", function($scope, NotificationService) {
	$scope.getNotifications = NotificationService.getNotifications;
	$scope.nextMatch = {
		id : 17,
		tournament : "volley mixte",
		teamA : "les bronzés font du volley",
		teamB : "blop",
		date : new Date()
	};

	$scope.closeAlert = function(index) {
		$scope.alerts[index].$delete();
	}
}]);
