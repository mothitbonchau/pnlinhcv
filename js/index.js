
var myApp = angular.module('MyApp', ['ngMaterial', 'firebase'])
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
;
myApp.controller('AppCtrl', function ($scope, $mdDialog, $firebaseObject, $firebaseArray) {

    $scope.showDocsNav = false;
    var ref = new Firebase("https://1212202-cv.firebaseio.com/");
//    var add = ref.child('education');
//    add.push().set({
//        "img": "imgs/edu_logo_1.png",
//        "name": "Lorem Ipsum",
//        "subject": "Bachelor of Science, Economics",
//        "time": "1988 - June 1992"
//    }
//    );
//


    // $firebaseObject(ref.child('overview')).$bindTo($scope, "info");

    //  $firebaseObject(ref.child('skill')).$bindTo($scope, "skillList");





    $scope.info = $firebaseObject(ref.child('overview'));

    // ref.child('summary').$bind($scope, 'summaryList');
    $scope.summaryList = $firebaseArray(ref.child('summary'));

    $scope.experienceList = $firebaseArray(ref.child('experience'));

    $scope.skillList = $firebaseObject(ref.child('skill'));

    $scope.educationList = $firebaseArray(ref.child('education'));
    $scope.volunteerList = $firebaseObject(ref.child('volunteer'));
    $scope.alsoList = $firebaseArray(ref.child('alsoview'));
    $scope.projectList = $firebaseArray(ref.child('project'));



    $scope.showEdit = function (ev, template, data, isAdd) {
        var templatePath = "js/edit/" + template;
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            controller: DialogController,
            templateUrl: templatePath,
            parent: parentEl,
            locals: {
                data: data,
                isAdd: isAdd

            },
            targetEvent: ev,
        }).then(function (data) {





        }, function () {

        });





        ;
    };
});
function DialogController($scope, $mdDialog, data, isAdd) {


    $scope.isAdd = isAdd;
    if (isAdd)
    {
        $scope.dialogData = {};
    } else
        $scope.dialogData = angular.copy(data);
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.check = function (test) {
        return angular.isUndefined(test);
    };
    $scope.onOK = function (dataReturn) {

        if (isAdd)
        {
            data.$add(dataReturn);
        } else
            angular.copy(dataReturn, data);


        $mdDialog.hide(data);
    };


   

}

