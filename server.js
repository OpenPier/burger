//Setting up the server file. Express//

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express ();

//"public directory in the application directory for the app"//
app.use(express.static(process.cwd() + '/public'));
//
app.use (bodyParser.urlencoded({
    extended: false
}));

//Override with POST 
app.use(methodOverride("_method"));
//sets handlebars as the view engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set('view engine', 'handlebars');
//Will import routes to the server, thus providing access
var routes = require('./controllers/burgers_controller.js');

var port = 3000;
app.listen(port);