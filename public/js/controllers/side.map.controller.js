angular.module('retailmap')
    .controller('sideMapCrtl', ['$scope', function($scope) {

        $scope.verGaleria =   function(){
            alert('VIU A GALERIA');
        };
        $scope.visitarLoja =  function (){
            alert('VISITOU A LOJA :) !!');
        };
        $scope.closeSide = function() {
            var sidebar = document.querySelector('.sidebar-map');
            return sidebar.classList.remove('side-show');
        }
    }]);