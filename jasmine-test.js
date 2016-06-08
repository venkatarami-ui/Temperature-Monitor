describe("Temperature Monitor Test Scripts", function() {

	var tempMonitorService;
	beforeEach(module('ngRoute'));
	beforeEach(module('tempMonitorApp'));

	beforeEach(inject(function($injector) {
		tempMonitorService = $injector.get('temperatureMonitorSrvc');
	}));

	it("Verift Median Temperature without any value", function() {
		var medianVal = tempMonitorService.getCurrentMedian();
		expect(0).toEqual(medianVal);
	});
	it("Verift Median Temperature with values", function() {
		tempMonitorService.recordTemperature(10);
		tempMonitorService.recordTemperature(11);
		var medianVal = tempMonitorService.getCurrentMedian();
		expect(10.5).toEqual(medianVal);
	});

});
