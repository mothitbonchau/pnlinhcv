
angular.module('MyApp', ['ngMaterial'])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                    .primaryPalette('light-blue')
                    .accentPalette('red');
        })

        .controller('AppCtrl', function ($scope) {
            $scope.showDocsNav = false;
            


        });


