"use strict";

angular.module("pyp.auth")
    .service("authService", function ($firebaseAuth) {
        return $firebaseAuth();
    })