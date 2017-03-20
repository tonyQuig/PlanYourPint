'use strict';

angular.module('pyp.user_profile', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/userProfile', {
        templateUrl: 'user_profile/user_profile.html',
        controller: 'UserProfileCtrl'
    });
}])

.controller('UserProfileCtrl', ['$scope', 'FirebaseService', function ($scope, FirebaseService) {

    var user = firebase.auth().currentUser;
    console.log('user info', user);

    $scope.userEmail = user.email;
    $scope.userImage = user.photoURL;
    $scope.userName = user.displayName;
}])