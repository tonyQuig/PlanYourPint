'use strict';

angular.module('pyp.mapPlotting', ['ngRoute', 'firebase', 'ngMap'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/mapPlotting', {
        templateUrl: 'map_plotting/map_plotting.html',
        controller: 'MapPlottingCtrl'
    });
}])

.controller('MapPlottingCtrl', ['$scope', 'NgMap', 'FirebaseService', function ($scope, NgMap, FirebaseService) {

    $scope.logLatLng = function (e) {
        console.log('loc', e.latLng);
    }

    console.log('SELECTED BAR LOCATIONS: ', FirebaseService.getLocations());

    $scope.wayPoints = FirebaseService.getLocations();

    console.log("Mapplotting.js waypoints: ", $scope.wayPoints);

    $scope.originLocation = FirebaseService.getUserLocation();

    console.log("Origin Location: ", $scope.originLocation);

}]);