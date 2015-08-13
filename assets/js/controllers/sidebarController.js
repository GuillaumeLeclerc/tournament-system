var app = angular.module("tournament-system");
app.controller("sidebarController", ["$scope", "UserService", "NotificationService", function($scope, UserService, NotificationService) {
	$scope.isConnected = function() {
		return UserService.getUserInfo().id != "guest";
	};

	$scope.numberOfNotifications = function() {
		var number = NotificationService.getNotifications().length;
		if (number === 0) {
			return "";
		} else {
			return number;
		}
	};
}]);

