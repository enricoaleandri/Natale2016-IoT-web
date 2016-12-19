# Natale 2016 IoT

This is a unique web interface for controlling my IoT gift for 2016. Christmas. Yes, in 2016 I decide to make my own present
for my family, it has been so hard, at last I didnt finish every thing,of 4 original ideas, I have been able to build Just two :(

This is the list of original project with links:
* [Laser-Gun](https://github.com/enricoaleandri/LaserGun-IoT-driver) - A Laser Gun pointer for let play you cats automatically, .
* HowButton -  A Project to satisfy a parent's needs, to ask you , every time, every where HOW ARE YOU? So I made a big green button,
to let them ask me by Email and receive a response as quickly as I can.
* EmotiveRobot - A project to let you people comunicate, without texting , or using word, it's just to give an emotion to the other one,
and let him/her know how you feel;
* PixarLamp - This is just BIG pixar lamp, that can turn on/off remotely, with your phone.

## Setup
To use this application you will need :
* Firebase application;
* Heroku app;
* Mosquito server (as Add-on of Heroku app);

#### Firebase

So First Create Firebase App and you will need the API key and private Key to connect FE and BE.
* Create project ![projectCreated](https://raw.githubusercontent.com/enricoaleandri/Natale2016-IoT-web/master/docs/images/createProject.png)
* Click on "Add Firebase to web Application" ![Add Firebase web application](https://raw.githubusercontent.com/enricoaleandri/Natale2016-IoT-web/master/docs/images/addFirebaceWebApplication.png)
* Copy the config Object in the modals and past it into the view/partials/header.ejs ( insted of the config object already present);

So Now you have front-end connected correctly to Firebase database, now :
* Go on Gear icon ( top-left of screen) > **Authorization** ![Authorization](https://raw.githubusercontent.com/enricoaleandri/Natale2016-IoT-web/master/docs/images/authorization.png)
* Click on left menu  **Service account** ![Service account](https://raw.githubusercontent.com/enricoaleandri/Natale2016-IoT-web/master/docs/images/serviceAccount.png)
* And then on **Create new Service Account** ![New Serivice Account](https://raw.githubusercontent.com/enricoaleandri/Natale2016-IoT-web/master/docs/images/createServiceAccount.png)
* Fill the form with your prefered name, and desiderate role anche check the tick for provide a New private key ( as JSON ) ![new Json Private key](https://raw.githubusercontent.com/enricoaleandri/Natale2016-IoT-web/master/docs/images/newjsonPrivateKey.png)
* After it has been generated, it start the download, so now copy the json private key e paste it in the directory app/config;
* Copy the full name of  json private key, and edit the file index.js changing **nalate-2016-ddb92796558b.json** in this row :
```
try {// if dont found, it means we are deployed, so we will look for it in to HEROKU environment
  serviceAccount = require("./app/config/nalate-2016-ddb92796558b.json");
}catch(e){
  serviceAccount = JSON.parse(process.env['nalate-2016-ddb92796558b.json']);
}
mqttService.init(); // start connection to
var config = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://natale-2016.firebaseio.com/"

};
```
* Change also the databaseURL with your firebase databaseUrl;

Now your application is perfectly configurated, if you want to test it out, go on section  [Running Locally](#running-locally), to run the
application without deploing and check out if everythink works well.

#### Heroku App
After you have your firebase you can proceed creating Heroku app,

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone https://github.com/enricoaleandri/Natale2016-IoT-web # or clone your own fork
$ cd Natale2016-IoT-web
$ npm install
$ bower install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

In the /public directory you have exposed web pages ( based on Angular ) in modular patten, in the /views directory
there are the Node pages
