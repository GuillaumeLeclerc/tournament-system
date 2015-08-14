var app = angular.module("tournament-system");
app.controller("wrongPasswordController", ["$scope", "$modalInstance", function($scope, $modalInstance) {
	$scope.ok = function() {
		$modalInstance.close();
	}
	$scope.forgottenPassword = function() {
		alert("we don't have a mail server yet, sorry :(");
	}
}]);
