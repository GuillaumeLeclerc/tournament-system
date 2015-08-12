angular.module("tournament-system.services", ["tournament-system.resources"]);
angular.module("tournament-system.directives", []);
angular.module("tournament-system.resources", ["sailsResource"]);
angular.module("tournament-system.resources", ["sailsResource"]);

angular.module("tournament-system", [
	"tournament-system.services",
	"tournament-system.directives",
	"tournament-system.resources",
	"ngRoute",
	"ui.bootstrap",
	"ui.bootstrap.tpls"
])
	.value("ts-version", "0.0.1a")
	.value("ts-title", "Polysports tournament-system");
