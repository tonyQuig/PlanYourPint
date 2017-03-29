'use strict';

angular.module('pyp.rating', ['ngRoute', 'firebase', 'jkAngularRatingStars'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/rating', {
        templateUrl: 'rating/rating.html',
        controller: 'RatingCtrl'
    });
}])

.controller('RatingCtrl', ['$scope', 'FirebaseService', function ($scope, FirebaseService) {

    $scope.firstRate = 0;
    $scope.secondRate = 3;
    $scope.readOnly = true;
    $scope.onItemRating = function (rating) {
        alert('On Rating: ' + rating);
    };

}]);