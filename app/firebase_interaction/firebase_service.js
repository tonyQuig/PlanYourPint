"use strict";

angular.module("pyp.firebase_interactions", [])
    .service("FirebaseService", function ($firebaseAuth, $location, $rootScope) {

        var location = "";
        var friends = 0;
        var barInfo = {};
        var that = this;
        var preferenceTotal = 0;

        var databaseRef = firebase.database().ref();
        var database = firebase.database();

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

        //        database.ref('/bars/').once('value').then(function (response) {
        //            console.log('Location: ', location);
        //            that.setBarInfo(response.val());
        //
        //        })

        this.getBarInfo = function () {
            database.ref('/bars/' + location).on('value', function (response) {
                that.setBarInfo(response.val());
            });
        }

        this.getTotalBarValues = function (allBars) {

            //Iterate through each bar
            angular.forEach(allBars, function (barInfo, index) {

                var barTotal = 0;

                var age = parseInt(barInfo.ageRange);
                var atmos = parseInt(barInfo.atomsphere);
                var dress = parseInt(barInfo.dressCode);
                var drink = parseInt(barInfo.drinkType);
                var food = parseInt(barInfo.foodOptions);
                var food = parseInt(barInfo.foodOptions);
                var name = barInfo.name;

                var barArray = [age, atmos, dress, drink, food];

                for (var index = 0; index < barArray.length; index++) {
                    barTotal += barArray[index];
                }

//                console.log('Bar total: ', barTotal);
//                console.log('Preference total: ', preferenceTotal);

                if (barTotal == preferenceTotal) {
                    console.log('MATCH FOUND!: ', name);
                } else {

                };
            })
        }

        this.compareBars = function () {

        }


    })