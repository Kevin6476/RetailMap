angular.module('retailmap')
    .controller('sideMapCrtl', ['$scope', '$location', function($scope, $location) {

        $scope.verGaleria =   function(){
            alert('VIU A GALERIA');
        };
        $scope.visitarLoja =  function (){
            $location.path('/store');
        };
        $scope.closeSide = function() {
            var sidebar = document.querySelector('.sidebar-map');
            return sidebar.classList.remove('side-show');
        }
    }]);