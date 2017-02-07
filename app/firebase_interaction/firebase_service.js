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
            console.log('Bar information: ', barInfo);
        }

        database.ref('/bars/' + location).once('value').then(function (response) {
            //            barInfo = response.val();
            that.setBarInfo(response.val());

        })

        //        //Returns list of bars depending on user selected location.
        //        this.getBarInfo = function () {
        //
        //            var temp = {};
        //
        //
        //            this.setBarInfo(temp);
        //        }



        //        this.getBarInfo();

    })