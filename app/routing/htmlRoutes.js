// Create relative paths to our htmls and public files
var path = require('path');

// Module.exports pushes our HTML route methods back to the server.js file
module.exports = function(app) {
  //<<=============== HTML GET Requests ===============>>//
  // The below code handles when users "visit" a page.
  // In EACH of the CASES BELOW the user is shown an HTML page of content <<<SPECIFICALLY>>> 
    
  // A GET Route to "/survey" which should display the survey page.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // A default, catch-all route that leads to "home.html"
  // It displays/defaults the home page when no matching route is found.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
  