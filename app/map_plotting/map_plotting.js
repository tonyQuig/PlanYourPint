'use strict';

angular.module('pyp.mapPlotting', ['ngRoute', 'firebase', 'ngMap'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/mapPlotting', {
        templateUrl: 'map_plotting/map_plotting.html',
        controller: 'MapPlottingCtrl'
    });
}])

.controller('MapPlottingCtrl', ['$scope', 'NgMap', 'FirebaseService', function ($scope, NgMap, FirebaseService) {

    var user = firebase.auth().currentUser;

    $scope.userDisplayName = user.displayName;

    $scope.wayPoints = FirebaseService.getLocations();

    console.log("Mapplotting.js waypoints: ", $scope.wayPoints);

    $scope.originLocation = FirebaseService.getUserLocation();

}]);