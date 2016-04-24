
angular.module('MyApp', ['ngMaterial'])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                    .primaryPalette('light-blue')
                    .accentPalette('red');
        })

        .controller('AppCtrl', function ($scope, $http) {
            $scope.showDocsNav = false;

            $http.get('data/infomation.json')
                    .then(function (res) {
                        $scope.info = res.data;
                    });
                    
            $http.get('data/summary.json')
                    .then(function (res) {
                        $scope.summaryList = res.data;
                    });
            $http.get('data/experience.json')
                    .then(function (res) {
                        $scope.experienceList = res.data;
                    });
                    
                  

           

        });


