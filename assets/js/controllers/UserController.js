angular.module("tournament-system").
controller("EPFLSubscriptionController", ["$scope", "$http", function($scope, $http, $modalInstance) {
	$scope.validSCIPER = false;
	$scope.statusSubscribe = 0;
	$scope.statusSCIPER = 0;
	$scope.sciper = "";
	$scope.newUser = {
		password : ""
	};
	$scope.password2 = "";

	$scope.sciperChoosen = function() {
		$http({
			method : "GET",
			url : "/user/getInfoFromSCIPER?sciper=" + $scope.sciper
		}).success(function(data, status) {
			$scope.statusSCIPER = status;
			$scope.validSCIPER = true;
			$scope.newUser.sciper = $scope.sciper;
			$scope.info = data;
		}).error(function(data, status) {
			$scope.validSCIPER = false;
			$scope.statusSCIPER = status;
		});;
	}
	$scope.passwordCondition = function() {
		var password = $scope.newUser.password;
		if (password.length < 6) {
			return "Password must be at least 6 characters long";
		} else if ($scope.password2 != password) {
			return "Passwords must match";
		} else {
			return false;
		}
	};
	$scope.submit = function() {
		$scope.statusSubscribe = -1; // request pending
		$scope.validSCIPER = 0;
		$http({
			method : "POST",
			url : "/user/subscribeEPFLStudent/",
			data : $scope.newUser
		}).success(function(data, status) {
			$scope.statusSubscribe = status;
		}).error(function (data, status) {
			$scope.statusSubscribe = status;
		});
	}
}]);
/*
angular.module("user").controller("LoginController", function($scope, $http) {
	var main = this;
	main.email = "";
	main.password = "";
	main.requestStatus = 0;
	main.login = function() {
		main.requestStatus = -1;
		$http({
			method : "POST",
			url : "/user/login/",
			data : {
				email : main.email,
				password : main.password
			}
		}).success(function(data, status) {
			main.requestStatus = status;
			if(requestStatus === 200) {
				// TODO redirect
			}
		}).error(function(data, status){
			main.requestStatus = status;
		});;
	}
});
*/
