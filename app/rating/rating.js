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

    $scope.priceRating = 3;
    $scope.foodRating = 3;
    $scope.drinkRating = 3;
    $scope.atmosphereRating = 3;
    $scope.ageRating = 3;
    $scope.dressRating = 3;

    $scope.onPriceRating = function (rating, name) {
        console.log("name: ", name);
        console.log("Rating: ", rating);
    }

    $scope.onFoodRating = function (rating, name) {
        console.log("name: ", name);
        console.log("Rating: ", rating);
    }

    $scope.onDrinkRating = function (rating, name) {
        console.log("name: ", name);
        console.log("Rating: ", rating);
    }

    $scope.onAtmosphereRating = function (rating, name) {
        console.log("name: ", name);
        console.log("Rating: ", rating);
    }

    $scope.onAgeRating = function (rating, name) {
        console.log("name: ", name);
        console.log("Rating: ", rating);
    }

    $scope.onDressRating = function (rating, name) {
        console.log("name: ", name);
        console.log("Rating: ", rating);
    }

}]);