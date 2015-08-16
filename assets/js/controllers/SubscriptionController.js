var app = angular.module("tournament-system");

app.controller("SubscriptionController", ["$scope", "Tournament", "UserService", "User", function($scope, Tournament, UserService, User) {
	$scope.teams = [
		{
			name : "les bronzés font du volley"
		}, {
			name : "happistes"
		}
	];

	$scope.availableTournaments = Tournament.query({state : "created"});

	$scope.newTeam = {};
	$scope.selectedTournament = null;

	var allUsers = UserService.getUsers();

	$scope.allUsers = function() {
		return _.filter(allUsers, function(value) {
			return value.id != "guest" //remove guest
				&& !_.any($scope.newTeam.members, {id : value.id}) ; // do not allow duplicates
		});
	}

	$scope.select = function(tid) {
		$scope.newTeam.tournament = tid;
		$scope.selectedTournament = _.find($scope.availableTournaments, {id : tid});
		$scope.newTeam.members = _.map(_.range($scope.selectedTournament.nbPlayerPerTeam), function() {
			return new User();
		});
	}

	$scope.playerSelected = function($item, $model, $label, $index) {
		$scope.newTeam.members[$index] = $item;
	}

	$scope.deselect = function() {
		$scope.newTeam.tournament = 0;
	}

	$scope.resetPlayer = function($index) {
		$scope.newTeam.members[$index] = new User();
	};

	$scope.isSelected = function() {
		return $scope.newTeam.tournament !== 0;
	}

	$scope.deselect();


}]);
