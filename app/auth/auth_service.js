"use strict";

angular.module("pyp.auth")
    .service("AuthService", function ($firebaseAuth, $location, $rootScope) {

        var authStatus = function () {
            //Observer object consoles current user.
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    return true;
                } else {
                    return false;
                }
            });
        }

        var signIn = function (provider) {
            $firebaseAuth().$signInWithPopup(provider).then(function (result) {
                $location.path('/citySelection');
            }).catch(function (error) {
                console.error('Authentication failed: ', error);
            })
        }

        return {
            firebase: $firebaseAuth(),
            authStatus: authStatus,
            signIn: signIn

        };
    })