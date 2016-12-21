/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

angular.module('CitofonoIot.pages.mobile', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mobile', {
            templateUrl: 'app/pages/pixarLamp/pixar-lamp.html',
            controller: 'pixarLampCtrl'
        });
    }])

    .controller('pixarLampCtrl', ['$scope', 'mqttService',
      function($scope, mqttPixarLampService) {
        console.log("pixarLampCtrl done");
    }]);