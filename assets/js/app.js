angular.module("tournament-system.services", []);
angular.module("tournament-system.directives", []);

angular.module("tournament-system", [
	"tournament-system.services",
	"tournament-system.directives",
	"ngRoute",
	"ui.bootstrap",
	"ui.bootstrap.tpls"
])
	.value("ts-version", "0.0.1a")
	.value("ts-title", "Polysports tournament-system");
