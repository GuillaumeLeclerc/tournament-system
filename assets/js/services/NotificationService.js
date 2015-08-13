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
		if (lastUserId !== "me" && lastUserId !== "") {
			lastRequest = User.notifications({id : lastUserId});
		} else {
			lastRequest = [];
		}
	}

	var getNotifications = function() {
		var userId = UserService.getUserInfo().id;
		if (userId != lastUserId) {
			lastUserId = userId;
			refreshNotifications();
		}
		if (lastRequest === null) {
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
