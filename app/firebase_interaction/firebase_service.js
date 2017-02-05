"use strict";

angular.module("pyp.firebase_interactions", [])
    .service("FirebaseService", function ($firebaseAuth, $location, $rootScope) {

        var location = "";
        var friends = 0;

        var databaseRef = firebase.database().ref();
        var database = firebase.database();

        this.getLocation = function () {
            return location;
        }

        this.setLocation = function (newLocation) {
            location = newLocation;
            console.log('Location set to: ', location);
        }

        this.setNumFriends = function (numFriends) {
            friends = numFriends;
            console.log('Number of friends set to: ', friends);
        }

        //Returns list of bars depending on user selected location.
        this.getBarInfo = function () {

            database.ref('/bars/' + location).once('value').then(function (response) {
                console.log('Bars in ', location);
                console.log(response.val());
            })
        }

    })