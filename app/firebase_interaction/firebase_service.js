"use strict";

angular.module("pyp.firebase_interactions", [])
    .service("FirebaseService", function ($firebaseAuth, $location, $rootScope) {

        var location = "";
        var friends = 0;
        var barInfo = {};
        var that = this;
        var preferenceTotal = 0;
        var currentLocation = "";
        var barArray = [];

        var databaseRef = firebase.database().ref();
        var database = firebase.database();

        this.getUserLocation = function () {
            console.log("Current location: ", currentLocation);
            return currentLocation;
        }

        this.setUserLocation = function (lng, lat) {

            currentLocation = {
                lat, lng
            };

        }

        this.setPreference = function (newPreferenceTotal) {
            preferenceTotal = newPreferenceTotal;
            console.log('Preference Total = ', preferenceTotal);
        }

        this.getLocation = function () {
            return location;
        }

        this.setLocation = function (newLocation) {
            location = newLocation;
        }

        this.setNumFriends = function (numFriends) {
            friends = numFriends;
        }

        this.setBarInfo = function (bars) {

            barInfo = bars;
            this.getTotalBarValues(barInfo);
        }

        this.getBarInfo = function () {
            database.ref('/bars/' + location).on('value', function (response) {
                that.setBarInfo(response.val());
            });
        }

        this.getTotalBarValues = function (allBars) {

            //Iterate through each bar
            angular.forEach(allBars, function (barInfo, index) {

                barArray = [];

                var barTotal = 0;

                var age = parseInt(barInfo.ageRange);
                var atmos = parseInt(barInfo.atomsphere);
                var dress = parseInt(barInfo.dressCode);
                var drink = parseInt(barInfo.drinkType);
                var food = parseInt(barInfo.foodOptions);
                var name = barInfo.name;

                var barArray = [age, atmos, dress, drink, food];

                for (var index = 0; index < barArray.length; index++) {
                    barTotal += barArray[index];
                };
                that.findMatch(barTotal, barInfo);
            })
        }

        this.findMatch = function (barTotal, barInfo) {

            var newBarTotal = barTotal;
            var newBarInfo = barInfo;

            if (newBarTotal == preferenceTotal) {
                console.log('MATCH FOUND!: ', barInfo);
                that.pushLocations(barInfo.longitude, barInfo.latitude);
            } else {

            };
        }

        //Push selected locations to an array
        this.pushLocations = function (oldLng, oldLat) {

            //Local parsing of strings into floats for google maps api
            var lat = parseFloat(oldLng);
            var lng = parseFloat(oldLat);

            //Push selected bar locations to an array
            barArray.push({
                location: {
                    lng, lat
                }
            });
        }

        this.getLocations = function () {
            return barArray;
        }
    })