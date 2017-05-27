'use strict';

angular.module('pyp.ratingConfirmation', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/rating-confirmation', {
        templateUrl: 'rating-confirmation/rating-confirmation.html',
        controller: 'RatingConfirmationCtrl'
    });
}])

.controller('RatingConfirmationCtrl', ['$scope', function ($scope) {




}]);