var app = angular.module("tournament-system");

app.controller("TournamentManagementController", ["$scope", "$modal", "Tournament", function($scope, $modal, Tournament) {
	$scope.tournaments = Tournament.query();
	$scope.createNewTournament = function() {
		$modal.open({
			animation : true,
			templateUrl : "templates/newTournamentModal.html",
			controller : "NewTournamentModalController"
		});
	};
}]);
