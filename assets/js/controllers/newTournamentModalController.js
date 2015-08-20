var app = angular.module("tournament-system");

app.controller("NewTournamentModalController", ["$scope", "$modalInstance", "Tournament", function($scope, $modalInstance, Tournament) {
	$scope.error = null; 
	$scope.schema = {
		type: "object",
		required : ["name"],
		properties: {
			name: { type: "string", minLength: 2, title: "Name"},
			nbMaxTeam : {
				type : "number",
				minimum : 1
			},
			nbMaxTeamPerSection : {
				type : "number",
				minimum : 1
			},
			nbPlayerPerTeam : {
				title : "Number of player per team",
				type : "number",
				minimum : 1
			},
			validationPlace : {
				title : "Validation place",
				type : "string",
			},
			validationDate : {
				title : "Validation Date",
				type : "string",
				format : "date"
			},
			playerTypes : {
				type : "string",
				enum : ["male", "female", "both"],
				title : "Player restrictions"
			},
			startDate : {
				title : "Start date",
				type : "string",
				format : "date"
			},
			endDate : {
				title : "End Date",
				type : "string",
				format : "date"
			},
		}
	};

	$scope.form = [
		"*",
	];

	$scope.newTournament = new Tournament();
	$scope.test = function() {
		alert("form valid");
	};

	$scope.cancel = function() {
		$modalInstance.dismiss("canceled");
	}

	$scope.clickedNew = function() {
		$scope.newTournament.$save(function() {
			$modalInstance.close();
		}, function(error) {
			$scope.error = error.summary;
		});
	};
}]);
