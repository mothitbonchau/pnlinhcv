
var myApp = angular.module('MyApp', ['ngMaterial'])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                    .primaryPalette('light-blue')
                    .accentPalette('red');
        });

myApp.directive('editHover', function () {
    return {
        restrict: 'A',
        scope: {
            editHover: '@'
        },
        link: function (scope, element) {
            var child = angular.element(element[0].querySelector('.non-visible'));
            element.on('mouseenter', function () {
                child.addClass(scope.editHover);
            });
            element.on('mouseleave', function () {
                child.removeClass(scope.editHover);
            });
        }
    };
});
myApp.controller('AppCtrl', function ($scope, $mdDialog, $http) {

    $scope.showDocsNav = false;



    $http.get('data/information.json')
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
    $scope.overviewEdit = false;
    $scope.overviewHover = function () {
        return $scope.overviewEdit = !$scope.overviewEdit;
    };
    $scope.showEdit = function (ev, template, data) {
        var templatePath = "js/edit/" + template;
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            controller: DialogController,
            templateUrl: templatePath,
            parent: parentEl,
            locals: {
                data: data
            },
            targetEvent: ev,
        });
    };
});

function DialogController($scope, $mdDialog, data) {

    $scope.dialogData = angular.copy(data);



    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.onOK = function (dataReturn) {
        angular.copy(dataReturn, data);
        $mdDialog.hide();
    };
}

