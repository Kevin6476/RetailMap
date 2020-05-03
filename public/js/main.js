angular.module('retailmap', ['ngAnimate', 'ngRoute', 'ngResource', 'retailmapDirectives', 'retailmapServices'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'templates/pages/index.html',
		})
		.when('/client', {
			templateUrl: 'templates/pages/client.html',
			controller: 'controllerMain'
		})
		.when('/store', {
			templateUrl: 'templates/pages/store.html',
		})
		.when('/admin', {
			templateUrl: 'templates/pages/admin.html'
		})
		.when('/***/', {
			templateUrl: 'templates/pages/404.html'
		});

		$routeProvider.otherwise({redirectTo: '/***/'});

	});