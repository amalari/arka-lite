//using library express
var express = require('express');

//add express to variable app
var app = express();

//using library body parser
var bodyParser = require('body-parser');

//using library cookie parser
var cookieParser = require('cookie-parser');

//using library flash
//var flash = require('connect-flash');

//using library index.js from folder views as var hbs
//var hbs = require('./core/handlebar/index.js');

//using labrary email
//var email = require('./core/email');

//using config for development and production
var config = require('./config');

var env = process.env.NODE_ENV || 'development';

app.use(express.static(__dirname + '/public'));
if(env == 'production'){
	app.use('/public/uploads', express.static(__dirname + '/../data'));
}
//use middleware body parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
	extended: true,
	limit: '50mb'
}));
app.use(cookieParser());

app.listen(config.port, function(){
	console.log("Listening on %s, server_port %s", config.ipAddress, config.port);
});