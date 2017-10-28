'use strict';

app.controller('MembershipCtrl', function ($scope, $routeParams, FirebaseStorage, $window, $location, $anchorScroll) {

//all scoped vars
    $scope.newMember = {};

//create new memberObj from user input
    $scope.createNewMember = function () {
        $scope.newMember.first_name = "";
        $scope.newMember.last_name = "";
        $scope.newMember.mailing_address = "";
        $scope.newMember.city = "";
        $scope.newMember.state = "";
        $scope.newMember.zip = "";
        $scope.newMember.phone = "";
        $scope.newMember.email = "";
    };


//send user's new object to Firebase
    $scope.memberToFB = function () {
        FirebaseStorage.addMember($scope.newMember)
    };

});