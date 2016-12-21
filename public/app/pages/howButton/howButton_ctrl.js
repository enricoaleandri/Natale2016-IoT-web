/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

angular.module('CitofonoIot.pages.howButton', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mobile', {
            templateUrl: 'app/pages/howButton/how-button.html',
            controller: 'howButtonCtrl'
        });
    }])

    .controller('howButtonCtrl', ['$scope', 'mqttService',
      function($scope, mqttHowButtonService) {
        console.log("howButtonCtrl done");
        $scope.sendText = function(textMessage){
          mqttHowButtonService.respondText(textMessage);
        };
        $scope.sendSmile = function(smile){
          mqttHowButtonService.respondSmile(smile);
        }
    }]);