var app = angular.module("tournament-system");

app.service("UserService", function() {
	var currentUserInfo = null;
	return {
		isLoggedIn : function() {
			return currentUserInfo !== null;
		},

		getUserInfo : function() {
			return angular.copy(currentUserInfo);
		}
	}
});
