//calls .env file and keys.js
require("dotenv").config();


var keys = require("./keys");
var Spotify = require(Spotify)

var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
// var inquirer = require("inquirer");
var nodeArgs = process.argv;

var movieThis = "";
var movieRequest = require("http://www.omdbapi.com/?t=" + movieThis + "&y=&plot=short&apikey=trilogy");

//========JSON requests =====================================================
if (nodeArgs[2] === "movie-this") {
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {

            movieThis = movieThis + "+" + nodeArgs[i]
        }

        else {
            movieThis += nodeArgs[i];
        }
    }

    // Request module on a URL with a JSON
    movieRequest, function (error, response, body) {

        // If no errors and rxesponse code is 200 
        if (!error && response.statusCode === 200) {

            // Print out the omdb return
            console.log("=====================");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("iMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoMeter);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    };
}

//if song is "undefined"/if not song return I want it that way
if (nodeArgs[2] === "spotify-this-song") {
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {

            spotifyThis = spotifyThis + "+" + nodeArgs[i]
        }

        else {
            spotifyThis += nodeArgs[i];
        }
    }
}