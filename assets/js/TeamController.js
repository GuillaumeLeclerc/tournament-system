var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // url points to a json file that contains an array of country names, see
  // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
  prefetch: '/team/getAuthorizedUsers'
});

angular.module("teams", []);
angular.module("teams").controller("TeamsController", function($scope, $http) {
	var main = this;
	main.teams = null;
	main.error = null;
	main.newTeamName = "";
	main.createTeam = function() {
		var name = main.newTeamName;
		main.newTeamName = "Creating Empty Team ...";
		$http({
			method : "POST",
			url : "/team/create",
			data : {
				name : name
			}
		}).success(function(data, status) {
			main.newTeamName = "";
			main.updateTeams();
		}).error(function(data, status) {
			main.error = status.toString();
		});
	}

	main.deleteTeam = function(id) {
		main.teams = null;
		$http({
			method : "POST",
			url : "/team/delete",
			data : {
				id : id
			}
		}).success(function(data, status){
			main.updateTeams();
		}).error(function(data, status) {
			main.error = status.toString();
		});
	}

	main.updateTeams = function() {
		main.teams = null;
		$http({
			method : "GET",
			url : "/team/getMyTeams"
		}).success(function(data, status) {
			main.teams = data;
			// passing in `null` for the `options` arguments will result in the default
			// options being used
			setTimeout(function() {
				$('.prefetch').typeahead(null, {
				  name: 'countries',
				  source: countries
				});
			}, 0);
		}).error(function(data, status) {
			main.teams = [];
			main.error = status.toString();
		});
	}

	$scope.addMember = function (id, name) {
		$scope.newUser = "";
	}

	main.updateTeams();
});

