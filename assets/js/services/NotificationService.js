var app = angular.module("tournament-system.services");

app.service("NotificationService", ["Notification", function(Notification) {
	var notifications = Notification.query();
	var deleteNotification = function(notificationId) {
		//TODO send the request to the server
		//TODO use a unique id instead of the index in the array
		notifications.splice(notificationId, 1); 
	};
	return {
		notifications : notifications,
		delete : deleteNotification
	};
}]);
