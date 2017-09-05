// server.js

// set up ========================
var express = require('express');
var app = express(); // create our app w/ express
var morgan = require('morgan'); // log requests to the console (express4)
var moment = require('moment');

// configuration =================

app.use(express.static(__dirname + '/Static')); // set the static files location /public/img will be /img for users
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use(morgan('dev')); // log every request to the console

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");