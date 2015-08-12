var app = angular.module("tournament-system");

app.service("UserService", ["User", function(User) {
	var userInfo = User.get({id : "me"});
	var currentUserInfo = null;

	return {
		login : function(email, password) {
			var l = new User();
			l.email = email;
			l.password = password;
			l.$login().then(function() {
				userInfo = User.get({id : "me"});
			});
		},
		isLoggedIn : function() {
			return userInfo.id && userInfo.id != "guest";
		},

		getUserInfo : function() {
			return angular.copy(userInfo);
		}
	}
}]);
