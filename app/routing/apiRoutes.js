//<<=============== LOAD DATA ===============>>//
// We link our routes to our "data" sources.
// The require method receives the data sources that hold arrays of information on friends.js
var friendsData = require("../data/friends");


//<<=============== ROUTES ===============>>//

// Module.exports pushes our API route methods back to the server.js file
module.exports = function (app) {

  // ===== API GET REQUEST ===== //
  // Below code handles when users "visit" a page/link
  // A GET route with the url "/api/friends" will be used to display a JSON of all possible friends.

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  // ===== API POST Requests ===== //
  // Below code handles when a user "submits" a friends survey and thus submits data to the server.
  // When a user submits the survey <<<<<IN JSON OBJECT FORM>>>>>, the JSON is pushed to the appropriate JavaScript array
  // (In other words, a user fills out a friend survey... the data is sent to the server...
  // And the server saves the data to the friendsArray.)
  // A POST route "/api/friends" will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    friendsData.push(req.body);

    // I was'nt able to complete the score matching.  I will still atttempt to complete it this week.
    // I'll have to make sure ill change the survey responses from strings to interger.
    // I'll then parse through the object , collect the data, and compare the scores. 
    // If the users match or closely match, ill push the answer to the modal  on survey.html
    // If not, the user still gets matched to the closest user.  
    // I.E.  If there are only two users, and one is at a range of 10 and the other at a range of 50.....They will still get matched.
    // As the core user experience expands and more users are added.  the matches will be more relevant 


  });
};