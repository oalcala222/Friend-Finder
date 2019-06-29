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
    
    
    // we gather the scores available from the body and set them as variable currentScore
    var currentScore = req.body.scores;
    
    // we set the highest score possible by any user based on the form inputs
    var highestScore = 50;
    
    // we set the base score of the friendMatch to 10 as that is the lowest score possible by any user
    var friendMatch = 10;
    
    // we loop over the friendsData variable to parse all the info in the friendsArray 
    for (var i = 0; i < (friendsData.length - 1); i++) {
      
      //we create a variable for the total difference between users
      var totalDifference = 0;
    
      // We create the variable compare to hold the scores from the friendsArray 
      var compare = friendsData[i].scores;
      
      // we loop over the currents scores from the body
      for (var o = 0; o < currentScore.length; o++) {
        // used this from stack overflow to use aboslute math and gather the difference
        var difference = Math.abs(parseInt(currentScore[o]) - parseInt(compare[o]));
        // we can then add to calculate the difference between user scores
        totalDifference = totalDifference + difference;
      }
     
    }
    // req.body is available since we're using the body parsing middleware
    friendsData.push(req.body);
    // send the response
    res.send(friendsData[friendMatch]);

  });



};