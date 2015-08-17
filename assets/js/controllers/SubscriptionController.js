var app = angular.module("tournament-system");

app.controller("SubscriptionController", ["$scope", "Tournament", "UserService", "User", "Team", "$modal", function($scope, Tournament, UserService, User, Team) {
	$scope.currentUser = UserService.getUserInfo(); 
	$scope.availableTournaments = Tournament.query({state : "created"});

	$scope.newTeam = new Team();
	$scope.selectedTournament = null;

	var allUsers = UserService.getUsers();

	$scope.allUsers = function() {
		return _.reject(allUsers, function(value) {
			return value.id === "guest" //remove guest
				|| _.any($scope.newTeam.members, {id : value.id}) ; // do not allow duplicates
		});
	}

	$scope.select = function(tid) {
		$scope.newTeam.tournament = tid;
		$scope.selectedTournament = _.find($scope.availableTournaments, {id : tid});
		$scope.newTeam.members = _.map(_.range($scope.selectedTournament.nbPlayerPerTeam), function() {
			return new User();
		});
		$scope.newTeam.members[0] = UserService.getUserInfo(); // the captain is the logged user
		$scope.newTeam.captain = $scope.newTeam.members[0];
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

$scope.isFun = function() {
	return _.compact(_.uniq(_.pluck($scope.newTeam.members, "section"))).length > 1;
}

$scope.isValid = function() {
	return $scope.selectedTournament !== null && _($scope.newTeam.members).pluck("id").compact().uniq().value().length === $scope.selectedTournament.nbPlayerPerTeam;
}

// no tournament is selected in the begining
$scope.deselect();

$scope.saveTeam = function() {
	if ($scope.isValid()) {
		$scope.currentUser.leads.push($scope.newTeam);
			var output = angular.copy($scope.newTeam);
			output.captain = output.captain.id;
			output.members = _.pluck(output.members, "id");
			output.$save();
			$scope.newTeam = new Team();
			$scope.deselect();
		}
	}
}]);
