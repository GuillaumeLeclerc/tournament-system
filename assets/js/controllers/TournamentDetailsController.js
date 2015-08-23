var app = angular.module("tournament-system");

app.controller("TournamentDetailsController", ["$scope", "Tournament", "$routeParams", function($scope, Tournament, $routeParams) {
	$scope.tournament = Tournament.get({id : $routeParams.id});
	$scope.getFillPercentage = function () {
		if ($scope.tournament.teams) {
			return $scope.tournament.teams.length / $scope.tournament.nbMaxTeam * 100;
		} else {
			return 0;
		}
	};
}]);
