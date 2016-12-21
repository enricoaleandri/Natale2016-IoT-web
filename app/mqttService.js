/**
 * Created by enricoaleandri on 18/09/16.
 */


var MqttService  = function(){
        try { // if dont found, it means we are deployed, so we will look for it in to HEROKU environment
              MqttService.prototype.config = require("./config/mqttConfig.json");
        }catch(e){
              MqttService.prototype.config = JSON.parse(process.env['mqttConfig.json']);
        }
        MqttService.prototype.init = function(){

            var mqtt = require('mqtt');
            var configMQTT = this.config;


            var options = configMQTT.credential;
            var CLOUDMQTT_URL = process ? process.env.CLOUDMQTT_URL : undefined;

            var client = mqtt.connect(CLOUDMQTT_URL || options);
            this.client = client;
            client.on('connect', function () { // When connected

                // subscribe to a topic
                client.subscribe(configMQTT.logTopic, function() {
                    // when a message arrives, do something with it
                    client.on('message', function(topic, message, packet) {
                        console.log("Received '" + message + "' on '" + topic + "'");
                    });
                });

            });

        };
        MqttService.prototype.isConnected = function() {
            if (this.client.connected())
                return true;
            else {
                this.init();
                return false;
            }
        };
        MqttService.prototype.howButtonSendCommand = function(command) {
          this.client.publish(this.config.channels.howButton.clientTopic, command, function () {
            console.log("Inviato comando  : "+command)
          });
      
        }
        MqttService.prototype.laserGunSendCommand = function(command) {
          this.client.publish(this.config.channels.laserGun.clientTopic, command, function () {
            console.log("Inviato comando  : "+command)
          });
      
        }
        MqttService.prototype.pixarLampSendCommand = function(command) {
          this.client.publish(this.config.channels.pixarLamp.clientTopic, command, function () {
            console.log("Inviato comando  : "+command)
          });
      
        }
}

module.exports = new MqttService();