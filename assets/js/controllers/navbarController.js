var app = angular.module("tournament-system");
app.controller("navbarController", ["$scope", "ts-title", "ts-version", function($scope, title, version) {
	$scope.projectName = title;
	$scope.version = version;
}]);
