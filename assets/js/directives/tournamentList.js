var app = angular.module("tournament-system.directives");

app.directive("tsTournamentlist", ["$location", "Tournament", function($location, Tournament) {
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/directives/tournamentList.html",
		scope : {},
		link : function ($scope, element, attributes) {
			$scope.tournaments = Tournament.query();
			$scope.seeDetails = function(id) {
				$location.url("tournament/" + id);
			}
		}
	};
}]);
