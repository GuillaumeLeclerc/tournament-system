var app = angular.module("tournament-system");
app.controller("sidebarController", ["$scope", "NotificationService", function($scope, NotificationService) {
	$scope.numberOfNotifications = function() {
		var number = NotificationService.notifications.length;
		if (number === 0) {
			return "";
		} else {
			return number;
		}
	};
}]);

