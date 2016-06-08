app.service("temperatureMonitorSrvc", function() {
	this.tempratureValues = [];
	this.recordTemperature = function(temparature) {
		this.tempratureValues.push(temparature);
	};

	this.getCurrentMedian = function() {
		if(this.tempratureValues.length==0){
			return 0;
		}
		this.sortTemparatureValues();
		var middlePos = Math.floor(this.tempratureValues.length / 2);

		if (this.tempratureValues.length % 2)
			return this.tempratureValues[middlePos];
		else
			return (this.tempratureValues[middlePos - 1] + this.tempratureValues[middlePos]) / 2.0;
	}

	this.sortTemparatureValues = function() {
		this.tempratureValues.sort(function(num1, num2) {
			return num1 - num2;
		});
	}
});
