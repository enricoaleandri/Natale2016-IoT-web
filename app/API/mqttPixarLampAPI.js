/**
 * Created by enricoaleandri on 18/09/16.
 */

module.exports = function (app, router) {

  var mqttService = require("../mqttService");
  router.post('/mqtt/pixarlamp', isLoggedIn, function(req, res) {
      console.log("req", req.body);
      var command = '{"event":'+req.body.action+'}';
      mqttService.sendCommand(command);

      res.json({message: 'Azione '+req.body.action+' invocato'});
  });
  
};


function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}