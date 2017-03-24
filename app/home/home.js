'use strict';

angular.module('pyp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope', 'AuthService', '$rootScope', 'FirebaseService', function ($scope, AuthService, $rootScope, FirebaseService) {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $scope.isAuth = true;
        } else {
            $scope.isAuth = false;
        }
    });

    var options = {
        enableHighAccuracy: true
    };

    navigator.geolocation.getCurrentPosition(function (pos) {
            $scope.long = pos.coords.longitude;
            $scope.lat = pos.coords.latitude;
            $scope.currentPosition = '[' + $scope.lat + ', ' + $scope.long + ']';
            FirebaseService.setUserLat($scope.lat);
            FirebaseService.setUserLong($scope.long);


        },
        function (error) {
            alert('Unable to get location: ' + error.message);
        }, options);


}]);