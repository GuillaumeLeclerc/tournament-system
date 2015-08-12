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

app.directive("tsNavlink", ["$location", function($location) {
	return {
		restrict : "A",
		replace : true,
		template : "<li x-ng-class=\"{active : isActive()}\"><a x-ng-click='clicked()' href=''>{{text}} <span class=\"badge\">{{badge}}</span> <span class='sr-only' x-ng-if='isActive()'> (current)</span></a></li>",
		scope : {
			url : "@tsNavlink",
			badge : "=tsBadge"
		},
		link : function($scope, element, attributes) {
			$scope.text = attributes.title;
			$scope.isActive = function() {
				return $scope.url === $location.path();
			}
			$scope.clicked = function () {
				$location.path($scope.url);
			}
		}
	}
}]);
