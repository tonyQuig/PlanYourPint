'use strict';

angular.module('pyp.preferenceSelection', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/preferenceSelection', {
        templateUrl: 'preference_selection/preference_selection.html',
        controller: 'PreferenceSelectionCtrl'
    });
}])

.controller('PreferenceSelectionCtrl', ['$scope', function ($scope) {

    console.log('Option: ', $scope.price);

}])