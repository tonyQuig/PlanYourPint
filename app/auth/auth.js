'use strict';

angular.module("pyp.auth", ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/auth', {
        templateUrl: 'auth/auth.html',
        controller: 'AuthCtrl'

    });
}])

.controller('AuthCtrl', ['$scope', '$firebaseAuth', 'AuthService', '$location', function ($scope, $firebaseAuth, AuthService, $location) {

    $scope.authObj = $firebaseAuth();

    $scope.login = function (provider) {
        console.log('Provider selected: ', provider);
        AuthService.signIn(provider);

    }

}]);