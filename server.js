//<<=============== DEPENDENCIES ===============>>//
// Create our server and manage our routes
var express = require("express");


// Tell node that we are creating an "express" server
var app = express();
// Set an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serves up static assets from public
app.use(express.static(__dirname + "/public"));


//<<=============== ROUTES ===============>>//  
// The below point our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// In other words, they take care of the <<<<<WHERE>>>>>
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//<<=============== LISTENER ===============>>//
// Set up a listener on the designated port for our app
app.listen(PORT, function () {
  console.log("Connected. App listening on PORT " + PORT)
})

