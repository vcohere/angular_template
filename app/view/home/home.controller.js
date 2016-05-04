mainModule.controller('homeCtrl', function($scope, homeRest) {
	var self = this;

	self.getData = function() {
		self.load = true;
		self.load = false;
	}

	self.doRefresh = function() {
		self.getData();
	}

	self.getData();
});