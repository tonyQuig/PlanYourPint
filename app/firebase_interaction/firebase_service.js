"use strict";

angular.module("pyp.firebase_interactions", [])
    .service("FirebaseService", function ($firebaseAuth, $location, $rootScope) {

        var location = "";
        var friends = 0;
        var barInfo = {};
        var that = this;

        var databaseRef = firebase.database().ref();
        var database = firebase.database();

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

        database.ref('/bars/' + location).once('value').then(function (response) {
            //            barInfo = response.val();
            that.setBarInfo(response.val());

        })

        this.getTotalBarValues = function (allBars) {

            //Iterate through each bar
            angular.forEach(allBars, function (bar, index) {

                //Iterate through information of each bar
                angular.forEach(bar, function (barInfo, index) {
                    console.log('Individual bar info: ', barInfo);

                    var barTotal = 0;

                    var age = parseInt(barInfo.ageRange);
                    var atmos = parseInt(barInfo.atomsphere);
                    var dress = parseInt(barInfo.dressCode);
                    var drink = parseInt(barInfo.drinkType);
                    var food = parseInt(barInfo.foodOptions);
                    var food = parseInt(barInfo.foodOptions);

                    var barArray = [age, atmos, dress, drink, food];

                    for (var index = 0; index < barArray.length; index++) {
                        barTotal += barArray[index];
                    }
                    console.log('Bar total: ', barTotal);
                })
            });
        }
    })