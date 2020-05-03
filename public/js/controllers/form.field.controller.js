angular.module('retailmap')
	.controller('formFieldCrtl', ['$scope', '$http', function($scope, $http) {
		$scope.inputSeachFormField;

		$scope.$watch('inputSeachFormField', function(newval) {
			if(typeof newval === 'string' && newval.length) {
				console.log(newval);
			}
		});

	}]);