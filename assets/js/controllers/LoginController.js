var app = angular.module("tournament-system");

app.controller("LoginController", ["$scope", "UserService", function($scope, UserService) {
	$scope.getUserInfo = UserService.getUserInfo;
	$scope.isLoggedIn = UserService.isLoggedIn;
}]);
