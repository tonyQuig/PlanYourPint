'use strict';

angular.module('pyp.rating', ['ngRoute', 'firebase', 'jkAngularRatingStars'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/rating', {
        templateUrl: 'rating/rating.html',
        controller: 'RatingCtrl'
    });
}])

.controller('RatingCtrl', ['$scope', 'FirebaseService', function ($scope, FirebaseService) {

    $scope.selectedBars = FirebaseService.getBarDetails();
    console.log('Selected bars: ', $scope.selectedBars);

    console.log('$scope.barName: ', $scope.barName);
}]);