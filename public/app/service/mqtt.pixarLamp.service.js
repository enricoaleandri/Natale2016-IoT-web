/**
 * Created by enricoaleandri on 20/11/16.
 */

(function () {
  'use strict'
  /** @ngInject */
  function mqttPixarLampService(ENDPOINT_MQTT_PIXARLAMP, $http) {


    function callMqttService(button){
      var data = {
        bottone : button
      };
      var request = {
        method : "POST",
        url :  ENDPOINT_MQTT_PIXARLAMP,
        data : data
      }
      return $http(request)
        .then(function (response) {
          console.log("response : "+response.message);
        }).catch(function (response) {

          console.log("Error : "+response.message);
        });
    }
    function callFirstButton() {
      return callMqttService(1);
    }
    return {
      callFirstButton : callFirstButton
    }
  }

  angular.module('Natale2016IoT.service')
    .factory('mqttPixarLampService', mqttPixarLampService)
})()