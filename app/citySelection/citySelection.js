'use strict';

angular.module('pyp.citySelection', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/citySelection', {
        templateUrl: 'citySelection/citySelection.html',
        controller: 'CitySelectionCtrl'
    });
}])

.controller('CitySelectionCtrl', ['$scope', function ($scope) {

    var user = firebase.auth().currentUser;
    console.log('User info: ', user);

    if (user != null) {
        $scope.name = user.displayName;
        $scope.email = user.email;
        $scope.photoUrl = user.photoUrl;
        $scope.uid = user.uid;
        $scope.emailVerified = user.emailVerified;
    }

    $scope.onCityChange = function () {
        console.log('City selection: ', $scope.citySelection);
    }

    $scope.onNumFriendsChange = function () {
        console.log('Number of friends has changed to: ', $scope.numFriends);
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
            name: "Select number of friends..."
        },
        {
            id: 1,
            name: "1"
        },
        {
            id: 2,
            name: "2"
        },
        {
            id: 3,
            name: "3"
        }
    ];

}]);