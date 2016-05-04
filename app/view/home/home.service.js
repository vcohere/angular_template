angular.module('homeRest', [ 'ngResource' ])
.factory('homeRest', function($resource) {	

	var URL_API = "http://localhost:8040/api/";

	var serviceRest = $resource(URL_API, null, 
	{
		// "get" : { method: "GET", isArray: false, url: URL_API + "get"}
		// "post" : { method: "POST", url: URL_API + "post" }
	});

	return {
		// get: function(obj) {
		// 	return serviceRest.get(obj);
		// }
		// post: function(obj) {
		// 	return serviceRest.post(obj, function() {}, function(r) {});
		// }
	};
})
