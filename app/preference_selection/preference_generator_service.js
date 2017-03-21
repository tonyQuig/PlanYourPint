"use strict";

angular.module("pyp.preference_generator_service", [])
    .service("PreferenceGenerator", function ($firebaseAuth, $location, $rootScope) {

        this.getPricePreferences = function () {
            return [{
                id: 1,
                name: "Cheap Night"
            }, {
                id: 2,
                name: "Not so cheap night"
            }, {
                id: 3,
                name: "Expensive Night"
            }];
        };

        this.getFoodPreferences = function () {
            return [{
                id: 1,
                name: "Yes"
            }, {
                id: 2,
                name: "No"
            }];
        }

        this.getDrinkPreferences = function () {
            return [{
                id: 1,
                name: "Cocktails"
            }, {
                id: 2,
                name: "Craft Beers"
            }, {
                id: 2,
                name: "No Preference"
            }];
        }

        this.getAtmospherePreferences = function () {
            return [{
                id: 1,
                name: "Quiet"
            }, {
                id: 2,
                name: "Lively"
            }, {
                id: 3,
                name: "Background Music"
            }, {
                id: 4,
                name: "Live Band"
            }, {
                id: 5,
                name: "Club"
            }];
        };

        this.getAgePreferences = function () {
            return [{
                id: 1,
                name: "18-25"
            }, {
                id: 2,
                name: "25-34"
            }, {
                id: 3,
                name: "35+"
            }, {
                id: 4,
                name: "No Preference"
            }];
        };

        this.getDressPreferences = function () {
            return [{
                id: 1,
                name: "Casual"
            }, {
                id: 2,
                name: "Smart"
            }, {
                id: 3,
                name: "Party"
            }];
        };
    })