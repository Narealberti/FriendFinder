var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// PORT is either the port provided by Heroku via process.env.PORT or 8080.
var PORT =  process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// why does the api routes have to be required before the html routes, or else the api link on the home page does not work?
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
