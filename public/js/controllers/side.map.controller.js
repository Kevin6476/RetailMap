angular.module('retailmap')
    .controller('sideMapCrtl', ['$scope', function($scope) {

        $scope.verGaleria =   function(){
            alert('VIU A GALERIA');
        };
        $scope.visitarLoja =  function (){
            alert('VISITOU A LOJA :) !!');
        };
    }]);