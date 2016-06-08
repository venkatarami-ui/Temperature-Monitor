tempMonitorApp.controller("addtemp_ctrl", function($scope,temperatureMonitorSrvc) {

	$scope.addTemperature = function(){
		temperatureMonitorSrvc.recordTemperature($scope.temperatureVal);
		$scope.currentMedian = temperatureMonitorSrvc.getCurrentMedian();
	}
	$scope.currentMedian = temperatureMonitorSrvc.getCurrentMedian();
});
tempMonitorApp.controller("median_ctrl", function($scope,temperatureMonitorSrvc) {
	$scope.medianTemp = temperatureMonitorSrvc.getCurrentMedian();
});
