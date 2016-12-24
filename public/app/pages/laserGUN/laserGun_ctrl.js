/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

angular.module('Natale2016IoT.pages.laserGun', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/laser-gun', {
            templateUrl: 'app/pages/laserGUN/laser-gun.html',
            controller: 'laserGunCtrl'
        });
    }])

    .controller('laserGunCtrl', ['$scope', 'mqttLaserGunService',
      function($scope, mqttLaserGunService) {
        console.log("laserGunCtrl done");
    }]);