"use strict";

angular.module("pyp.auth")
    .service("AuthService", function ($firebaseAuth, $location, $rootScope) {

        var authStatus = function () {
            //Observer object consoles current user.
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    console.error('Authenticated!: ', user);
                    return true;
                } else {
                    console.error('Not! Authenticated!: ', user);
                    return false;
                }
            });
        }


        var signIn = function (provider) {
            console.log('Inside signIn function');
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