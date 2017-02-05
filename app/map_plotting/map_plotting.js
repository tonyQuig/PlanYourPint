'use strict';

angular.module('pyp.mapPlotting', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/mapPlotting', {
        templateUrl: 'map_plotting/map_plotting.html',
        controller: 'MapPlottingCtrl'
    });
}])

.controller('MapPlottingCtrl', ['$scope', 'MapService', function ($scope, MapService) {


    console.log('MapService: ', MapService);
    MapService.calculateAverage();

}])