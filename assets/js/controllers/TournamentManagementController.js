var app = angular.module("tournament-system");

app.controller("TournamentManagementController", ["$scope", "$modal" , function($scope, $modal) {
	$scope.title = "Test";
	$scope.createNewTournament = function() {
		$modal.open({
			animation : true,
			templateUrl : "templates/newTournamentModal.html",
			controller : "NewTournamentModalController"
		});
	};
}]);
