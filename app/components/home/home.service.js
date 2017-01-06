angular.module('homeRest', [ 'ngResource' ])
.factory('homeRest', function($resource) {
	// Everything that modify or access data must be in the SERVICE part of the code

	var text = "some data";

	return {
		data: text
	};
})
