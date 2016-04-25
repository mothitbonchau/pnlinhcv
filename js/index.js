
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

//data/infomation.json
            $http.get('https://api.myjson.com/bins/4di92')
                    .then(function (res) {
                        $scope.info = res.data;
                    });
//                    data/summary.json
            $http.get('https://api.myjson.com/bins/3jaae')
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


