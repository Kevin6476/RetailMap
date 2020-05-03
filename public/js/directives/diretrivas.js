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
        }
    })
    .directive('menuStoreComponent', function() {
        return {
            restrict: 'E',
            templateUrl: '../templates/components/menu-store-component/menu-store.component.html',
            controller: 'menuStoreCtrl'
        }
    })
    .directive('sideStoreCompoenent', function() {
        return {
            restrict: 'E',
            templateUrl: '../templates/components/side-store-component/side-store.component.html',
            controller: 'sideStoreCtrl'
        }
    })
    .directive('sideBarAdminComponent', function() {
        return {
            restrict: 'E',
            templateUrl: '../templates/components/sidebar-admin-component/sidebar-admin.component.html',
            controller: 'sideBarAdminCtrl'
        }
    })
    .directive('headerAdminComponent', function() {
        return {
            restrict: 'E',
            templateUrl: '../templates/components/header-admin-component/header-admin.component.html',
            controller: 'headerAdminCtrl',
        }
    });


    // .directive('', function() {
    //     return {
    //         restrict: 'E',
    //         templateUrl: '../templates/components/',
    //         controller: '',
    //     }
    // });