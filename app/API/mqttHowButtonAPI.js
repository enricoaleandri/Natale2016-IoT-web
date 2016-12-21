/**
 * Created by enricoaleandri on 18/09/16.
 */

module.exports = function (app, router) {

  var mqttService = require("../mqttService");
  router.post('/mqtt/howbutton', isLoggedIn, function(req, res) {
      console.log("req", req.body);
      var command = '{"action":'+req.body.action+',"content":'+req.body.content+'}';
      mqttService.howButtonSendCommand(command);

      res.json({message: 'Azione '+req.body.action+' invocato con questo contenuto : '+req.body.content});
  });
  
};


function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}