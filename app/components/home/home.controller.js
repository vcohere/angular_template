mainModule.controller('homeCtrl', function($scope, homeRest) {
	var self = this;

	self.getData = function() {
		self.load = true;
		// Only business logic in the controller part
		self.load = false;
	}

	self.getData();
});
