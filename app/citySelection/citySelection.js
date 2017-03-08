'use strict';

angular.module('pyp.citySelection', ['ngRoute', 'firebase', 'ngMap'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/citySelection', {
        templateUrl: 'citySelection/citySelection.html',
        controller: 'CitySelectionCtrl'
    });
}])

.controller('CitySelectionCtrl', ['$scope', 'FirebaseService', 'NgMap', function ($scope, FirebaseService, NgMap) {

    //Current user information
    var user = firebase.auth().currentUser;
    console.log('User info: ', user);

    //    $scope.mapVisibility = false;

    //Sets visibility of continue button.
    function continueButtonVisibility() {

        $scope.continueVisibility = false;

        if ($scope.citySelection != null) {
            $scope.continueVisibility = true;
        }

    }

    $scope.onCityChange = function () {
        continueButtonVisibility();
        //        $scope.mapVisibility = true;
        FirebaseService.setLocation($scope.citySelection);
    }

    $scope.onNumFriendsChange = function () {
        continueButtonVisibility();
        FirebaseService.setNumFriends($scope.friendsNum);
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

    $scope.numFriends = [
        {
            id: 0,
            name: "Select number of friends...",
            disabled: true
        },
        {
            id: 1,
            name: "1",
            disabled: false
        },
        {
            id: 2,
            name: "2",
            disabled: false
        },
        {
            id: 3,
            name: "3",
            disabled: false
        }
    ];


    NgMap.getMap().then(function (map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

    $scope.logLatLng = function (e) {
        console.log('lat: ', e.latLng.lat());
        console.log('lng: ', e.latLng.lng());
        FirebaseService.setCurrentLocation(e.latLng.lng(), e.latLng.lat());
    }

    $scope.centerPosition = "[54.596751, -5.930031]";

    $scope.wayPoints = [{
            location: {
                lat: 54.584449,
                lng: -5.937342
            },
            stopover: true
            },
        {
            location: {
                lat: 54.588981,
                lng: -5.934220
            },
            stopover: true
            },
        {
            location: {
                lat: 54.593119,
                lng: -5.931274
            },
            stopover: true
            },
        {
            location: {
                lat: 54.597165,
                lng: -5.932189
            },
            stopover: true
            }, ];



}]);