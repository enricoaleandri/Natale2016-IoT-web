/**
 * Created by enricoaleandri on 20/11/16.
 */

(function () {
  'use strict'
  /** @ngInject */
  function mqttLaserGunService(ENDPOINT_MQTT_LASERGUN, $http) {


    function callMqttService(button){
      var data = {
        bottone : button
      };
      var request = {
        method : "POST",
        url :  ENDPOINT_MQTT_LASERGUN,
        data : data
      }
      return $http(request)
        .then(function (response) {
          console.log("response : "+response.message);
        }).catch(function (response) {

          console.log("Error : "+response.message);
        });
    }
    function callAction(action) {
      return callMqttService(1);
    }
    return {
      callFirstButton : callFirstButton
    }
  }

  angular.module('Natale2016IoT.service')
    .factory('mqttLaserGunService', mqttLaserGunService)
})()