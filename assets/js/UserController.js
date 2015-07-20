angular.module("ts", []);
angular.module("ts").controller("EPFLSubscriptionController", function($scope, $http) {
	var ctrl = this;
	ctrl.validSCIPER = false;
	ctrl.statusSubscribe = 0;
	ctrl.statusSCIPER = 0;
	ctrl.newUser = {
		password : ""
	};
	ctrl.password2 = "";
	ctrl.sciperChoosen = function() {
		$http({
			method : "GET",
			url : "/user/getInfoFromSCIPER?sciper=" + ctrl.sciper
		}).success(function(data, status) {
			ctrl.statusSCIPER = status;
			ctrl.validSCIPER = true;
			ctrl.newUser.sciper = ctrl.sciper;
			ctrl.info = data;
		}).error(function(data, status) {
			ctrl.validSCIPER = false;
			ctrl.statusSCIPER = status;
		});;
	}
	ctrl.passwordCondition = function() {
		var password = ctrl.newUser.password;
		if (password.length < 6) {
			return "Password must be at least 6 characters long";
		} else if (ctrl.password2 != password) {
			return "Passwords must match";
		} else {
			return false;
		}
	};
	ctrl.submit = function() {
		ctrl.statusSubscribe = -1; // request pending
		ctrl.validSCIPER = 0;
		$http({
			method : "POST",
			url : "/user/subscribeEPFLStudent/",
			data : ctrl.newUser
		}).success(function(data, status) {
			ctrl.statusSubscribe = status;
		}).error(function (data, status) {
			ctrl.statusSubscribe = status;
		});
	}
});
