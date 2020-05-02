angular.module('retailmap')
	.controller('headerStoreCtrl', ['$scope','$routeParams', function($scope, $routeParams) {
        $scope.inputSeachHeader;

        $scope.$watch('inputSeachHeader', function(newval, oldval) {
            if(typeof newval === "string" && newval.length) {
                console.log(newval);
            }
        });


	}]);