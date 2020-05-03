angular.module('retailmap')
	.controller('headerAdminCtrl', ['$scope', function($scope) {
        $scope.notifications = function () {
            alert('notification');
        }
        $scope.exit = function () {
            alert('exit');
        }
	}]);