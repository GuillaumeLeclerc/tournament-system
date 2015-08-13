var app = angular.module("tournament-system");
app.controller("ProfileController", ["$scope", "UserService", function($scope, UserService) {
	$scope.name = UserService.getUserInfo().name;
}]);
