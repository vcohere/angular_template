var mainModule = angular.module('mainModule', [
	'ui.router',
	'homeRest'
]);

mainModule.controller("navCtrl", function($scope, $rootScope) {
	$rootScope.view = "home";
});
