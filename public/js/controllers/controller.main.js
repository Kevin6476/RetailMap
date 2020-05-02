angular.module('retailmap')
	.controller('controllerMain', ['$scope','$routeParams', function($scope, $routeParams) {
		$scope.testeClick = function() {
			alert('Funcionou');
		}
	}]);