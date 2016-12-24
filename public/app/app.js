/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('Natale2016IoT', [
    'ngRoute',
    'Natale2016IoT.service',
    'Natale2016IoT.pages'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
}]);