var app = angular.module("tournament-system");

app.controller("LoginController", ["$scope", "UserService", "$modal", function($scope, UserService, $modal) {
	$scope.getUserInfo = UserService.getUserInfo;
	$scope.isLoggedIn = UserService.isLoggedIn;
	$scope.register = function() {
		var modalInstance = $modal.open({
			animation : true,
			templateUrl : "templates/register.html",
			controller : "RegisterController",
			size : "lg"
		});
		modalInstance.result.then(function(userInfo) {
			console.log(userInfo); 
		});
	}
}]);
