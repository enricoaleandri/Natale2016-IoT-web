/**
 * Created by enricoaleandri on 18/09/16.
 */




// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var firebase = require("firebase");


// expose this function to our app using module.exports
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) { // callback with email and password from our form

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            var db = firebase.database();
            username = username.replace(".", "")
                                .replace("#","")
                                .replace("$","")
                                .replace("[","")
                                .replace("]", "");
            var ref = db.ref("/users/" + username);
            ref.once("value", function (snapshot) {
                console.log(snapshot.val());
                var user = snapshot.val();

                // if there are any errors, return the error before anything else
                if (user === undefined || user == null ||  user.password != password)
                    return done(null, false,  req.flash('loginMessage', "Incorrect credential")); // req.flash is the way to set flashdata using connect-flash


                // all is well, return successful user
                return done(null, user);
            });
    }));

};