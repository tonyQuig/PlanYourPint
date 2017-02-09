'use strict';

angular.module('pyp.citySelection', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/citySelection', {
        templateUrl: 'citySelection/citySelection.html',
        controller: 'CitySelectionCtrl'
    });
}])

.controller('CitySelectionCtrl', ['$scope', 'FirebaseService', function ($scope, FirebaseService) {

    //Current user information
    var user = firebase.auth().currentUser;
    console.log('User info: ', user);

    //Sets visibility of continue button.
    function continueButtonVisibility() {

        $scope.continueVisibility = false;

        if ($scope.citySelection != null && $scope.friendsNum != null) {
            $scope.continueVisibility = true;
        }

    }

    $scope.onCityChange = function () {
        continueButtonVisibility();
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
            disabled: false
        },
        {
            id: 2,
            name: "London",
            disabled: false
        },
        {
            id: 3,
            name: "Dublin",
            disabled: false
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

}]);