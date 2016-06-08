tempMonitorApp.config(function($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl : "home/home.html"
	}).when("/addtemp", {
		templateUrl : "tempmonitor/addTemperature.html",
		controller : "addtemp_ctrl"
	}).when("/getmedian", {
		templateUrl : "tempmonitor/getmedian.html",
		controller : "median_ctrl"
	}).otherwise({
		redirectTo : "/home"
	})
});
