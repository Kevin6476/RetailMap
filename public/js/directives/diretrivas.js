angular.module('retailmapDirectives', [])
    .directive('formField', function() {
       return {
            restrict: 'E',
            templateUrl: '../templates/components/form-field/form-field.html',
            controller: 'formFieldCrtl',
            scope: {
                id: '@', 
                placeholder: '@', 
                icon : '@', 
                label: '@'
            }
       } 
    });
    // .directive('', function() {

    // });