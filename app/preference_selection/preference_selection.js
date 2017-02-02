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
        console.log('Price change: ', $scope.price);
        preferenceContinueButton();
    }

    $scope.onFoodChange = function () {
        console.log('Food change: ', $scope.food);
        preferenceContinueButton();
    }

    $scope.onDrinkChange = function () {
        console.log('Drink change: ', $scope.drinkType);
        preferenceContinueButton();
    }

    $scope.onAtmosphereChange = function () {
        console.log('Atmosphere change: ', $scope.atmosphere);
        preferenceContinueButton();
    }

    $scope.onAgeRangeChange = function () {
        console.log('Age Range change: ', $scope.ageRange);
        preferenceContinueButton();
    }

    $scope.onDressCodeChange = function () {
        console.log('Dress Code change: ', $scope.dressCode);
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

            console.log('Inside Preference button');
            $scope.preferenceContinueButton = true;
        }
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