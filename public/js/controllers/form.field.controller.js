angular.module('retailmap')
	.controller('formFieldCrtl', ['$scope', function($scope) {
		$scope.inputSeachFormField;

		$scope.$watch('inputSeachFormField', function(newval) {
			if(typeof newval === 'string' && newval.length) {
				console.log(newval);
			}
		})
	}]);