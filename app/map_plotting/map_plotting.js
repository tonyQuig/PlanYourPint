'use strict';

angular.module('pyp.mapPlotting', ['ngRoute', 'firebase', 'ngMap'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/mapPlotting', {
        templateUrl: 'map_plotting/map_plotting.html',
        controller: 'MapPlottingCtrl'
    });
}])

.controller('MapPlottingCtrl', ['$scope', 'NgMap', 'FirebaseService', 'PreferenceGenerator', '$rootScope', function ($scope, NgMap, FirebaseService, PreferenceGenerator, $rootScope) {

    var user = firebase.auth().currentUser;
    var userId = firebase.auth().currentUser.uid;

    $scope.showPreferences = false;
    $scope.recalculateButton = false;
    $scope.selectedBarNames = [];

    $scope.editButtonClick = function () {
        if ($scope.showPreferences == true) {
            $scope.showPreferences = false;
        } else {
            $scope.showPreferences = true;
        }
    }
    $scope.onPriceChange = function () {
        recalculateButtonVisibility();
    }

    $scope.onFoodChange = function () {
        recalculateButtonVisibility();
    }

    $scope.onDrinkChange = function () {
        recalculateButtonVisibility();
    }

    $scope.onAtmosphereChange = function () {
        recalculateButtonVisibility();
    }

    $scope.onAgeRangeChange = function () {
        recalculateButtonVisibility();
    }

    $scope.onDressCodeChange = function () {
        recalculateButtonVisibility();
    }

    function recalculateButtonVisibility() {

        if ($scope.price != null &&
            $scope.food != null &&
            $scope.drinkType != null &&
            $scope.atmosphere != null &&
            $scope.ageRange != null &&
            $scope.dressCode != null) {

            $scope.recalculateButton = true;
        }
    }

    $scope.recalculateDirections = function () {

        $scope.wayPoints = [];
        FirebaseService.emptybarArray();
        FirebaseService.emptyBarDetails();
        selectedBarNames();

        getPreferenceTotal();
        FirebaseService.getBarInfo();

        $scope.wayPoints = FirebaseService.getLocations();

        console.log("RECALCULATED WAYPOINTS: ", $scope.wayPoints);

        FirebaseService.emptySelectedBarNameArray();

        $scope.originLocation = FirebaseService.getUserLocation();
    }

    function getPreferenceTotal() {

        var totalPreference = parseInt($scope.price) + parseInt($scope.food) + parseInt($scope.drinkType) + parseInt($scope.atmosphere) + parseInt($scope.ageRange) + parseInt($scope.dressCode);

        FirebaseService.setPreference(totalPreference);

        console.log('Total preference', totalPreference);

        if (totalPreference == null) {
            $scope.noMatchesFound = true;
        } else {
            $scope.noMatchesFound = false;
        }
    }

    $scope.priceOptions = PreferenceGenerator.getPricePreferences();

    $scope.foodOptions = PreferenceGenerator.getFoodPreferences();

    $scope.drinkOptions = PreferenceGenerator.getDrinkPreferences();

    $scope.atmosphereOptions = PreferenceGenerator.getAtmospherePreferences();

    $scope.ageOptions = PreferenceGenerator.getAgePreferences();

    $scope.dressCodeOptions = PreferenceGenerator.getDressPreferences();

    $scope.userDisplayName = user.displayName;
    console.log('userId', userId);

    $scope.wayPoints = FirebaseService.getLocations();

    console.log("Mapplotting.js waypoints: ", $scope.wayPoints);

    $scope.originLocation = FirebaseService.getUserLocation();

    //    FirebaseService.emptySelectedBarNameArray();
    $scope.selectedBarNames = FirebaseService.getSelectedBarNameArray();

    function selectedBarNames() {
        $scope.selectedBarNames.length = 0;
        $scope.selectedBarNames = FirebaseService.getSelectedBarNameArray();
    }

    $scope.confirmPlan = function () {
        FirebaseService.savePlan(userId, $scope.originLocation, $scope.wayPoints, FirebaseService.getBarDetails());
    }

}]);