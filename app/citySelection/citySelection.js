'use strict';

angular.module('pyp.citySelection', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/citySelection', {
        templateUrl: 'citySelection/citySelection.html',
        controller: 'CitySelectionCtrl'
    });
}])

.controller('CitySelectionCtrl', ['$scope', 'FirebaseService', function ($scope, FirebaseService) {

    var user = firebase.auth().currentUser;
    console.log('User info: ', user);

    if (user != null) {
        $scope.name = user.displayName;
        $scope.email = user.email;
        $scope.photoUrl = user.photoUrl;
        $scope.uid = user.uid;
        $scope.emailVerified = user.emailVerified;
    }

    function continueButtonVisibility() {

        $scope.continueVisibility = false;

        if ($scope.citySelection != null && $scope.friendsNum != null) {
            console.log("Dropdowns are populated!");
            $scope.continueVisibility = true;
        } else {
            console.error("Dropdowns are not populated!");
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