/**
 * Created by enricoaleandri on 20/11/16.
 */

(function () {
  'use strict'
  /** @ngInject */
  function mqttHowButtonService(ENDPOINT_MQTT_HOWBUTTON, $http) {


    function callMqttService(action, content){
      var data = {
        action : action,
        content : content
      };
      var request = {
        method : "POST",
        url :  ENDPOINT_MQTT_HOWBUTTON,
        data : data
      }
      return $http(request)
        .then(function (response) {
          console.log("response : "+response.message);
        }).catch(function (response) {

          console.log("Error : "+response.message);
        });
    }
    function respondText(textToSend) {
      //Action 1 is for sending text 
      callMqttService(1,textToSend );
      return ;
    }
    function respondSmile(smile) {
      //Smile is a number from 1-7 to send a different smile to HowButton
      callMqttService(1,smile );
      return ;
    }
    return {
      respondText : respondText,
      respondSmile : respondSmile,
    }
  }

  angular.module('Natale2016IoT.service')
    .factory('mqttHowButtonService', mqttHowButtonService)
})()