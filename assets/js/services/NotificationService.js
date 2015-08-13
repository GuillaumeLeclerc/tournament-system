var app = angular.module("tournament-system.services");

app.service("NotificationService", ["UserService", "User", function(UserService, User) {
	var deleteNotification = function(index) {
		notifications[index].$delete();
	}

	var lastUserId = "";
	var lastRequest =  null;

	var getNotifications = function() {
		var userId = UserService.getUserInfo().id;
		if (userId != lastUserId) {
			lastRequest = User.notifications({id : userId});
			lastUserId = userId;
		}
		if (userId === "") {
			return [];
		} else {
			return lastRequest;
		}
	};
	return {
		getNotifications : getNotifications,
		delete : deleteNotification
	};
}]);
