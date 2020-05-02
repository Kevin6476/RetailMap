angular.module('retailmap', ['ngAnimate', 'ngRoute', 'ngResource', 'retailmapDirectives', 'retailmapServices'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/main', {
			templateUrl: 'templates/principal.html',
			controller: 'controllerMain'
		});

		$routeProvider.otherwise({redirectTo: '/main'});

	});