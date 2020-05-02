angular.module('retailmapDirectives', [])
    .directive('formFieldComponent', function() {
       return {
            restrict: 'E',
            templateUrl: '../templates/components/form-field-component/form-field-component.html',
            controller: 'formFieldCrtl',
            scope: {
                id: '@', 
                placeholder: '@', 
                icon : '@', 
                label: '@'
            }
       } 
    })
    .directive('sideMapComponent', function() {
        return {
            restrict: 'E',
            templateUrl: '../templates/components/side-map-component/side-map.component.html',
            controller: 'sideMapCrtl',
            scope: {
                nomeLoja: '@',
                telefone: '@',
                eMail: '@'
            }
        }
    })
    .directive('cardComponent', function() {
        return {
            restrict: 'E',
            templateUrl: '../templates/components/card-component/card.component.html',
            controller: 'cardCtrl',
            scope: {
                nomeItem: '@', 
                quantidade: '@', 
                valor: '@', 
            }
        }
    })
    .directive('headerStoreComponent', function() {
            return {
                restrict: 'E',
                templateUrl: '../templates/components/header-store-component/header-store.component.html',
                controller: 'headerStoreCtrl'
                // scope: {
                //     CAMPO: '', 
                // }
            }
        });




    // .directive('', function() {
    //     return {
    //         restrict: '',
    //         templateUrl: '',
    //         controller: '',
    //         scope: {
    //             CAMPO: '', 
    //         }
    //     }
    // });