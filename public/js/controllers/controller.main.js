angular.module('retailmap')
	.controller('controllerMain', ['$scope', function($scope) {

		$scope.constructor = function() {
			new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
              });
		}

		$scope.constructor();

	}]);