var app = angular.module("tournament-system");

app.controller("HomeController", ["$scope", function($scope) {
	$scope.alerts = [{
		title : "This is a test",
		content : "this is a simple content hop hop"
	},{
		title : "This is a second notification",
		content : "The content of this notification is slightly longer but not more interesting"
	},{
		title : "Have you seen you can dismiss notifications ?",
		content : "this is a pretty nice feature though"
	}];
	$scope.nextMatch = {
		id : 17,
		tournament : "volley mixte",
		teamA : "les bronzés font du volley",
		teamB : "blop",
		date : new Date()
		
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	}

}]);
