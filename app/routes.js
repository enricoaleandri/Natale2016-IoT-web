/**
 * Created by enricoaleandri on 18/09/16.
 */


module.exports = function (app, passport, firebase){

    app.get('/', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.redirect('/login');
    });
    app.get('/login', function(req, res) {

        console.log("login Message :"+req.flash('loginMessage'));
        // render the page and pass in any flash data if it exists
        if(req.isAuthenticated())
            res.redirect('/controller');
        else
            res.render('pages/login', { message: req.flash('loginMessage') });
    });

    app.get('/controller', function(req, res) {
        res.render('pages/controller', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    app.post('/singin', passport.authenticate('local-login', {
        successRedirect : '/controller', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        req.locals.applicationPath = req.session.applicationPath;
        return next();
    }

    // if they aren't redirect them to the home page
    res.redirect('/');
}