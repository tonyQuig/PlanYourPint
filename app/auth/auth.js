'use strict';

angular.module("pyp.auth", ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/auth', {
        templateUrl: 'auth/auth.html',
        controller: 'AuthCtrl'

    });
}])

.controller('AuthCtrl', ['$scope', '$firebaseAuth', 'authService', '$location', function ($scope, $firebaseAuth, authService, $location) {

    $scope.login = function (provider) {
        console.log('Provider selected: ', provider);
        authService.$signInWithPopup(provider)
            .then(function (result) {
                $location.path('/citySelection');
            }).catch(function (error) {
                console.error('Authentication failed: ', error);
            })
    }

    //Observer object consoles current user.
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('User has signed in: ', user);
        } else {
            console.log('User has not signed in.');
        }
    });
    



}]);