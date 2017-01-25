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

}]);