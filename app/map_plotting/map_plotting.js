'use strict';

angular.module('pyp.mapPlotting', ['ngRoute', 'firebase', 'ngMap'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/mapPlotting', {
        templateUrl: 'map_plotting/map_plotting.html',
        controller: 'MapPlottingCtrl'
    });
}])

.controller('MapPlottingCtrl', ['$scope', 'NgMap', 'FirebaseService', 'PreferenceGenerator', function ($scope, NgMap, FirebaseService, PreferenceGenerator) {

    $scope.showPreferences = false;

    $scope.editButtonClick = function () {
        if ($scope.showPreferences == true) {
            $scope.showPreferences = false;
        } else {
            $scope.showPreferences = true;
        }
    }

    $scope.priceOptions = PreferenceGenerator.getPricePreferences();

    $scope.foodOptions = PreferenceGenerator.getFoodPreferences();

    $scope.drinkOptions = PreferenceGenerator.getDrinkPreferences();

    $scope.atmosphereOptions = PreferenceGenerator.getAtmospherePreferences();

    $scope.ageOptions = PreferenceGenerator.getAgePreferences();

    $scope.dressCodeOptions = PreferenceGenerator.getDressPreferences();

    var user = firebase.auth().currentUser;

    $scope.userDisplayName = user.displayName;

    $scope.wayPoints = FirebaseService.getLocations();

    console.log("Mapplotting.js waypoints: ", $scope.wayPoints);

    $scope.originLocation = FirebaseService.getUserLocation();

    $scope.selectedBarNames = FirebaseService.getSelectedBarNameArray();
}]);