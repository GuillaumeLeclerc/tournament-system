var app = angular.module("tournament-system.services");

app.service("NotificationService", [
		"UserService",
		"User",
	   	"Notification",
	   	"$rootScope",

	 	function(UserService, User, Notification, $rootScope) {

	var handleSailsResourceEvent = function(event, message) {
		if (message.attribute === "notifications") {
			refreshNotifications();
		}
	}

	$rootScope.$on('$sailsResourceAddedTo', handleSailsResourceEvent);

	$rootScope.$on('$sailsResourceRemovedFrom', handleSailsResourceEvent);

	var deleteNotification = function(id) {
		var notif = new Notification();
		notif.id = id;
		notif.$delete();
		refreshNotifications();
	}

	var lastUserId = "";
	var lastRequest =  null;

	var refreshNotifications = function() {
		lastRequest = User.notifications({id : lastUserId});
	}

	var getNotifications = function() {
		var userId = UserService.getUserInfo().id;
		if (userId != lastUserId) {
			lastUserId = userId;
			refreshNotifications();
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
