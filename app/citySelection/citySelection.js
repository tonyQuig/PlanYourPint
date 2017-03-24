'use strict';

angular.module('pyp.citySelection', ['ngRoute', 'firebase', 'ngMap'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/citySelection', {
        templateUrl: 'citySelection/citySelection.html',
        controller: 'CitySelectionCtrl'
    });
}])

.controller('CitySelectionCtrl', ['$scope', 'FirebaseService', 'NgMap', function ($scope, FirebaseService, NgMap) {

    //Sets visibility of continue button.
    function continueButtonVisibility() {

        $scope.continueVisibility = false;

        if ($scope.citySelection != null) {
            $scope.continueVisibility = true;
        }

    }

    $scope.onCityChange = function () {
        continueButtonVisibility();
        FirebaseService.setLocation($scope.citySelection);
    }

    $scope.cities = [
        {
            id: 0,
            name: "Select a city below...",
            disabled: true
        },
        {
            id: 1,
            name: "Belfast",
            disabled: false,
        }

    ];

    $scope.logLatLng = function (e) {
        FirebaseService.setUserLocation(e.latLng.lng(), e.latLng.lat());
    }

    var lat = FirebaseService.getUserLat();
    var long = FirebaseService.getUserLong();

    $scope.currentPosition = lat + ', ' + long;

    FirebaseService.setUserLocation(long, lat);

}]);