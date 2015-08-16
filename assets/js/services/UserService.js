var app = angular.module("tournament-system");

app.service("UserService", ["User", "$timeout", function(User, $timeout) {
	var userInfo = User.get({id : "me"});
	var currentUserInfo = null;
	var allUsers = User.query();

	return {
		login : function(email, password, errorCallback) {
			var l = new User();
			l.email = email;
			l.password = password;
			l.$login().then(function() {
				console.log(arguments);
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
			return angular.copy(userInfo);
		},

		getUsers : function() {
			return allUsers;
		}
	}
}]);
