/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

angular.module('CitofonoIot.pages.mobile', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mobile', {
            templateUrl: 'app/pages/homeMobile/mobile.html',
            controller: 'mobileCtrl'
        });
    }])

    .controller('mobileCtrl', ['$scope', 'mqttService',
      function($scope, mqttService) {
        console.log("mobileCtrl done");
      $scope.callFirstButton = function(){
        mqttService.callFirstButton();
      };
      $scope.callSecondButton = function(){
        mqttService.callSecondButton();
      };
      $scope.callThirdButton = function(){
        mqttService.callThirdButton();
      };
    }]);