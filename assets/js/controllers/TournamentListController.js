var app = angular.module("tournament-system");

app.controller("TournamentListController", ["$scope", "Tournament", function($scope, Tournament) {
	$scope.tournaments = Tournament.query();

}]);
