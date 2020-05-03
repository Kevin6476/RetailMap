angular.module('retailmap')
    .controller('sideMapCrtl', ['$scope', '$location', function($scope, $location) {

        $scope.verGaleria =   function(){
            alert('VIU A GALERIA');
        };
        $scope.visitarLoja =  function (){
            $location.path('/store');
        };
    }]);