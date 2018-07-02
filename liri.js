require("dotenv").config();
var request = require(keys.js);

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var inquirer = require("inquirer");


var movieRequest = require("request");
var movieThis = "";

// Request module on a URL with a JSON
request("http://www.omdbapi.com/?t=" + movieThis + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If no errors and response code is 200 
  if (!error && response.statusCode === 200) {

    // Print out the omdb return
    console.log("=====================");
    console.log("Title: " + JSON.parse(body).imdbRating);
    console.log("Year: " + JSON.parse(body).imdbRating);
    console.log("iMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).imdbRating);
    console.log("Language: " + JSON.parse(body).imdbRating);
    console.log("Plot: " + JSON.parse(body).imdbRating);
    console.log("Actors: " + JSON.parse(body).imdbRating);
  }
});

inquirer
  .prompt([
    // Basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },


])