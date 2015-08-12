var app = angular.module("tournament-system.directives");

app.directive("tsNavlink", ["$location", function($location) {
	return {
		restrict : "A",
		replace : true,
		template : "<li x-ng-class=\"{active : isActive()}\"><a x-ng-click='clicked()' href=''>{{text}} <span class=\"badge\">{{badge}}</span> <span class='sr-only' x-ng-if='isActive()'> (current)</span></a></li>",
		scope : {
			url : "@tsNavlink",
			badge : "=tsBadge",
			text : "@title"
		},
		link : function($scope, element, attributes) {
			$scope.isActive = function() {
				return $scope.url === $location.path();
			}
			$scope.clicked = function () {
				$location.path($scope.url);
			}
		}
	}
}]);

