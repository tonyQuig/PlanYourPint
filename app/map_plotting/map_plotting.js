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
}, {
            location: {
                lat: 54.593119,
                lng: -5.931274
            },
            stopover: true
}, {
            location: {
                lat: 54.597165,
                lng: -5.932189
            },
            stopover: true
},
                       ];

}]);