/**
 * Created by enricoaleandri on 03/10/16.
 */
'use strict';

angular.module('Natale2016IoT.pages.howButton', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/how-button', {
            templateUrl: 'app/pages/howButton/how-button.html',
            controller: 'howButtonCtrl'
        });
    }])

    .controller('howButtonCtrl', ['$scope', 'mqttHowButtonService',
      function($scope, mqttHowButtonService) {
        console.log("howButtonCtrl done");
        $scope.sendText = function(textMessage){
          mqttHowButtonService.respondText(textMessage);
        };
        $scope.sendSmile = function(smile){
            var smileMapping = {
                "happy" : 1,
                "cute" : 2,
                "angry": 3
            }
          mqttHowButtonService.respondSmile(smileMapping[smile]);
        }
    }]);