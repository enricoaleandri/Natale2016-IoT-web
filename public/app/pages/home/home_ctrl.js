/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

angular.module('Natale2016IoT.pages.home', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/pages/home/home.html',
            controller: 'homeCtrl'
        });
    }])

    .controller('homeCtrl', ['$scope',
      function($scope) {
        console.log("homeCtrl done");

    }]);