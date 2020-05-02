angular.module('retailmap')
	.controller('controllerMain', ['$scope','$routeParams', function($scope, $routeParams) {

		$scope.teste1 = 'ID';
		$scope.teste2 = 'PLaceHolder';
		$scope.teste3 = 'search';
		$scope.teste4 = 'TesteLabel';
		debugger;


		$scope.testeClick = function() {
			alert('Funcionou');
		}
	}]);