mainModule.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'components/home/home.html'
	});

	$locationProvider.html5Mode(true);
});
