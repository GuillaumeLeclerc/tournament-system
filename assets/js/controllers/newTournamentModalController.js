var app = angular.module("tournament-system");

app.controller("NewTournamentModalController", ["$scope", "$modalInstance", function($scope, $modalInstance) {
	$scope.schema = {
		type: "object",
		properties: {
			name: { type: "string", minLength: 2, title: "Name"},
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

	$scope.newTournament = {};
}]);
