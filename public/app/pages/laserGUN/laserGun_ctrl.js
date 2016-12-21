/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

angular.module('CitofonoIot.pages.mobile', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mobile', {
            templateUrl: 'app/pages/laserGUN/laser-gun.html',
            controller: 'laserGunCtrl'
        });
    }])

    .controller('laserGunCtrl', ['$scope', 'mqttService',
      function($scope, mqttLaserGunService) {
        console.log("laserGunCtrl done");
    }]);