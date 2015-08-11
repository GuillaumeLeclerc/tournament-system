var app = angular.module("tournament-system.services");

app.service("NotificationService", function() {
	var notifications = [{
		title : "This is a test",
		content : "this is a simple content hop hop"
	},{
		title : "This is a second notification",
		content : "The content of this notification is slightly longer but not more interesting"
	},{
		title : "Have you seen you can dismiss notifications ?",
		content : "this is a pretty nice feature though"
	}];

	var deleteNotification = function(notificationId) {
		//TODO send the request to the server
		//TODO use a unique id instead of the index in the array
		notifications.splice(notificationId, 1); 
	};
	return {
		notifications : notifications,
		delete : deleteNotification
	};
});
