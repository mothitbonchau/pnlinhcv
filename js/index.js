
angular.module('MyApp', ['ngMaterial'])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                    .primaryPalette('light-blue')
                    .accentPalette('red');
        })

        .controller('AppCtrl', function ($scope, $http) {
            $scope.showDocsNav = false;

            $scope.getClass = function getClass(idx) {
                return {
                    'media-data': idx % 5 < 2, 'media-data-fix': idx % 5 >= 2
                };
            };

//
            $http.get('data/infomation.json')
                    .then(function (res) {
                        $scope.info = res.data;
                    });
//                    
            $http.get('data/summary.json')
                    .then(function (res) {
                        $scope.summaryList = res.data;
                    });
//data/experience.json                    
            $http.get('data/experience.json')
                    .then(function (res) {
                        $scope.experienceList = res.data;
                    });
            $http.get('data/skill.json')
                    .then(function (res) {
                        $scope.skillList = res.data;
                    });
            $http.get('data/education.json')
                    .then(function (res) {
                        $scope.educationList = res.data;
                    });
            $http.get('data/volunteer.json')
                    .then(function (res) {
                        $scope.volunteerList = res.data;
                    });
               

            $http.get('data/alsoviewed.json')
                    .then(function (res) {
                        $scope.alsoList = res.data;
                    });



            

        });


