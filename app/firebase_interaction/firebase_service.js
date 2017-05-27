"use strict";

angular.module("pyp.firebase_interactions", [])
    .service("FirebaseService", function ($firebaseAuth, $location, $rootScope) {

        var location = "";
        var friends = 0;
        var barInfo = {};
        var barDetails = [];
        var that = this;
        var preferenceTotal = 0;
        var currentLocation = "";
        var barArray = [];
        var selectedBarNameArray = [];
        var selectedBarName = "";
        var preferenceName = [];
        var databaseRef = firebase.database().ref();
        var database = firebase.database();
        var userLong = "";
        var userLat = "";

        this.setUserLat = function (lat) {
            userLat = lat;
        }
        this.setUserLong = function (long) {
            userLong = long;
        }
        this.getUserLong = function () {
            return userLong;
        }
        this.getUserLat = function () {
            return userLat;
        }

        this.getUserLocation = function () {
            return currentLocation;
        }

        this.setUserLocation = function (lng, lat) {

            currentLocation = {
                lat, lng
            };

        }

        this.setPreference = function (newPreferenceTotal) {
            preferenceTotal = newPreferenceTotal;
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
            barInfo = {};
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

        this.setSelectedBarName = function (newSelectedBarName) {

            selectedBarName = newSelectedBarName;
            //            console.log("Selected bar name = ", selectedBarName);
            this.pushBarName(selectedBarName);
        }

        this.getSelectedBarName = function () {
            return selectedBarName;
        }

        this.getSelectedBarNameArray = function () {
            return selectedBarNameArray;
        }

        this.emptySelectedBarNameArray = function () {
            selectedBarNameArray = [];
        }

        this.pushBarName = function (newBarName) {

            var barName = newBarName;
            selectedBarNameArray.push(
                barName
            );

        }

        this.findMatch = function (barTotal, barInfo) {

            var newBarTotal = barTotal;
            var newBarInfo = barInfo;

            if (newBarTotal == preferenceTotal) {
                console.log('MATCH FOUND!: ', barInfo);
                that.setSelectedBarName(barInfo.name);
                //                that.pushBarName(barInfo.name);
                that.pushLocations(barInfo.longitude, barInfo.latitude);
                that.pushBarDetails(barInfo);
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

        this.pushBarDetails = function (barInformation) {
            barDetails.push({
                barInformation
            });
            console.log("BAR DETAILS: ", barDetails);
        }

        this.emptyBarDetails = function () {
            barDetails = [];
        }

        this.getBarDetails = function () {
            return barDetails;
        }

        this.getLocations = function () {
            return barArray;
        }

        this.emptybarArray = function () {
            barArray = [];
        }

        this.getPreferenceNames = function () {
            return preferenceName;
        }

        this.setPreferenceNames = function (price, food, drinkType, atmosphere, ageRange, dressCode) {
            preferenceName.push(price, food, drinkType, atmosphere, ageRange, dressCode);
        }

        this.savePlan = function (userId, originLocation, wayPoints, barInformation, date) {

            database.ref('userPlans/' + userId).set({
                dateCreated: date,
                origin: originLocation,
                locations: wayPoints
            });
        }

        var newPosition = "";

        this.setUserPosition = function (position) {
            newPosition = position;
        }

        this.getUserPosition = function () {
            return newPosition;
        }
    })