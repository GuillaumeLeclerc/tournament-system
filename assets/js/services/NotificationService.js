var app = angular.module("tournament-system.services");

app.service("NotificationService", ["UserService", function(UserService) {
	var deleteNotification = function(index) {
		notifications[index].$delete();
	}

	var getNotifications = function() {
		return UserService.getUserInfo().notifications || [];
	};
	return {
		getNotifications : getNotifications,
		delete : deleteNotification
	};
}]);
