var app = angular.module("tournament-system");
app.controller("navbarController", ["$scope", "ts-title", function($scope, title) {
	$scope.projectName = title;
}]);
