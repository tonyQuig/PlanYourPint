'use strict';

angular.module('pyp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope', 'AuthService', '$rootScope', function ($scope, AuthService, $rootScope) {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $scope.isAuth = true;
        } else {
            console.error('Not! Authenticated!: ', user);
            $scope.isAuth = false;
        }
    });

}]);