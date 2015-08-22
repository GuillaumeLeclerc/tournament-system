var app = angular.module("tournament-system");

app.controller("TournamentDetailsController", ["$scope", "Tournament", "$routeParams", function($scope, Tournament, $routeParams) {
	$scope.tournament = Tournament.get({id : $routeParams.id});
}]);
