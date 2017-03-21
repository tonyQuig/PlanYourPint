'use strict';

angular.module('pyp.preferenceSelection', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/preferenceSelection', {
        templateUrl: 'preference_selection/preference_selection.html',
        controller: 'PreferenceSelectionCtrl'
    });
}])

.controller('PreferenceSelectionCtrl', ['$scope', 'FirebaseService', 'PreferenceGenerator', function ($scope, FirebaseService, PreferenceGenerator) {

    $scope.noMatchesFound = false;

    $scope.onPriceChange = function () {
        console.log("Price change: ", $scope.price.name);
        preferenceContinueButton();
    }

    $scope.onFoodChange = function () {
        preferenceContinueButton();
    }

    $scope.onDrinkChange = function () {
        preferenceContinueButton();
    }

    $scope.onAtmosphereChange = function () {
        preferenceContinueButton();
    }

    $scope.onAgeRangeChange = function () {
        preferenceContinueButton();
    }

    $scope.onDressCodeChange = function () {
        preferenceContinueButton();
    }

    function preferenceContinueButton() {
        $scope.preferenceContinueButton = false;

        if ($scope.price != null &&
            $scope.food != null &&
            $scope.drinkType != null &&
            $scope.atmosphere != null &&
            $scope.ageRange != null &&
            $scope.dressCode != null) {

            getPreferenceTotal();
            sendPreferenceNames();
            $scope.preferenceContinueButton = true;
            FirebaseService.getBarInfo();
        }
    }

    function sendPreferenceNames() {
        FirebaseService.setPreferenceNames($scope.price, $scope.food, $scope.drinkType, $scope.atmosphere, $scope.ageRange, $scope.dressCode);
    }

    function getPreferenceTotal() {

        var totalPreference = parseInt($scope.price) + parseInt($scope.food) + parseInt($scope.drinkType) + parseInt($scope.atmosphere) + parseInt($scope.ageRange) + parseInt($scope.dressCode);

        FirebaseService.setPreference(totalPreference);

        console.log('Average total: ', totalPreference);

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

}])