'use strict';

angular.module('pyp.preferenceSelection', ['ngRoute', 'firebase'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/preferenceSelection', {
        templateUrl: 'preference_selection/preference_selection.html',
        controller: 'PreferenceSelectionCtrl'
    });
}])

.controller('PreferenceSelectionCtrl', ['$scope', function ($scope) {

    $scope.onPriceChange = function () {
        preferenceContinueButton();
    }

    $scope.onFoodChange = function () {
        preferenceContinueButton();
    }

    $scope.onDrinkChange = function () {
        preferenceContinueButton();
    }

    $scope.onAtmosphereChange = function () {
        preferenceContinueButton();
    }

    $scope.onAgeRangeChange = function () {
        preferenceContinueButton();
    }

    $scope.onDressCodeChange = function () {
        preferenceContinueButton();
    }

    function preferenceContinueButton() {
        $scope.preferenceContinueButton = false;

        if ($scope.price != null &&
            $scope.food != null &&
            $scope.drinkType != null &&
            $scope.atmosphere != null &&
            $scope.ageRange != null &&
            $scope.dressCode != null) {

            getPreferenceTotal();
            $scope.preferenceContinueButton = true;
        }
    }

    function getPreferenceTotal() {

        var totalPreference = parseInt($scope.price) + parseInt($scope.food) + parseInt($scope.drinkType) + parseInt($scope.atmosphere) + parseInt($scope.ageRange) + parseInt($scope.dressCode);

        console.log('Average total: ', totalPreference);
    }

    $scope.priceOptions = [
        {
            id: 1,
            name: "£",
        },
        {
            id: 2,
            name: "££",
        },
        {
            id: 3,
            name: "£££",
        }
    ];

    $scope.foodOptions = [
        {
            id: 1,
            name: "Yes"
        },
        {
            id: 2,
            name: "No"
        }
    ];

    $scope.drinkOptions = [
        {
            id: 1,
            name: "Cocktails"
        },
        {
            id: 2,
            name: "Craft Beers"
        },
        {
            id: 3,
            name: "No Preference"
        }
    ];

    $scope.atmosphereOptions = [
        {
            id: 1,
            name: "Quiet"
        },
        {
            id: 2,
            name: "Lively"
        },
        {
            id: 3,
            name: "Background Music"
        },
        {
            id: 4,
            name: "Live Band"
        },
        {
            id: 5,
            name: "Club"
        }
    ];

    $scope.ageOptions = [
        {
            id: 1,
            name: "18-25"
        },
        {
            id: 2,
            name: "25-34"
        },
        {
            id: 3,
            name: "35+"
        },
        {
            id: 4,
            name: "No Preference"
        }
    ];

    $scope.dressCodeOptions = [
        {
            id: 1,
            name: "Casual"
        },
        {
            id: 2,
            name: "Smart"
        },
        {
            id: 3,
            name: "Party"
        }
    ];

}])