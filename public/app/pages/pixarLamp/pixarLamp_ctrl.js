/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

angular.module('Natale2016IoT.pages.pixarlamp', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pixar-lamp', {
            templateUrl: 'app/pages/pixarLamp/pixar-lamp.html',
            controller: 'pixarLampCtrl'
        });
    }])

    .controller('pixarLampCtrl', ['$scope', 'mqttPixarLampService',
      function($scope, mqttPixarLampService) {
        console.log("pixarLampCtrl done");
    }]);