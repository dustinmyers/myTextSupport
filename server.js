// modules //
var express = require('express');
var twilio = require('twilio');
var firebase = require('firebase');
var bodyParser = require('body-parser');
var cors = require('cors');
var myRootRef = new Firebase('https://twixter.firebaseio.com/');

// Express //
var app = express();

// Middleware //
app.use(bodyParser.json());
app.use(cors());



// Connections //
var port = 8765;
app.listen(port, function() {
	console.log("Listening. And watching...", port)
})