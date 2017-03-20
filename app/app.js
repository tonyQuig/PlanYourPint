'use strict';

// Declare app level module which depends on views, and components
angular.module('pyp', [
    'ngRoute',
    'pyp.citySelection',
    'pyp.home',
    'pyp.auth',
    'pyp.preferenceSelection',
    'pyp.mapPlotting',
    'pyp.firebase_interactions',
    'pyp.user_profile',
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

            $routeProvider.otherwise({
                redirectTo: '/home'
            });
}
            ]);