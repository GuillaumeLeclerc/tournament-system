var app = angular.module("tournament-system");

app.service("UserService", ["User", "$timeout", "$rootScope", function(User, $timeout, $rootScope) {
	var teams = [];
	var userInfo = User.get({id : "me"}, function() {
		userInfo.leads = User.leads({id : userInfo.id});
		teams = User.leads({id : userInfo.id});
	});
	var currentUserInfo = null;
	var allUsers = User.query();
	var lastUserId = "";

	return {
		login : function(email, password, errorCallback) {
			var l = new User();
			l.email = email;
			l.password = password;
			l.$login().then(function() {
				userInfo = User.get({id : "me"});
			}, function(jwr) {
				$timeout(errorCallback);
			});
		},
		logout : function() {
			User.logout();
			userInfo = User.get({id : "me"});
		},
		isLoggedIn : function() {
			return userInfo.id && userInfo.id != "guest";
		},

		getUserInfo : function() {
			return userInfo;
		},

		getUsers : function() {
			return allUsers;
		}
	}
}]);
