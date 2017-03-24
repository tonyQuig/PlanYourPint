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

    //Set the centre point for city selection map
    $scope.centerPosition = "[54.596751, -5.930031]";
    console.log('Center position: ', $scope.centerPosition);

    var options = {
        enableHighAccuracy: true
    };

    navigator.geolocation.getCurrentPosition(function (pos) {
            $scope.long = pos.coords.longitude;
            $scope.lat = pos.coords.latitude;
            //            $scope.currentPosition = '[' + $scope.lat + ', ' + $scope.long + ']';
            $scope.currentPosition = new google.maps.LatLng($scope.lat, $scope.long);
            console.log('Current position: ', $scope.currentPosition);

        },
        function (error) {
            alert('Unable to get location: ' + error.message);
        }, options);









}]);