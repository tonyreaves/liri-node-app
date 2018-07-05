//calls .env file and keys.js
require("dotenv").config();


var keys = require("./keys.js");
var request = require('request')
// var Spotify = require(Spotify)

// var newSpotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
var inquirer = require("inquirer");
var nodeArgs = process.argv;
var movie = "";


//========JSON requests =====================================================
if (nodeArgs[2] === "movie-this") {

    //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    if (nodeArgs[3] === undefined) {
        var movie = "Mr. Nobody"
    }
    else {
        for (var i = 3; i < nodeArgs.length; i++) {

            if (i > 3 && i < nodeArgs.length) {

                var movie = movie + "+" + nodeArgs[i]
            }

            else {
                movie += nodeArgs[i];
            }
        }
    }
    var movieQuery = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // Request module on a URL with a JSON
    request(movieQuery, function (error, response, body) {
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
        else console.log
    }
    )
}

//If no song is provided then your program will default to "The Sign" by Ace of Base.
//if song is "undefined"/if not song return I want it that way
// if (nodeArgs[2] === "spotify-this-song") {
//     for (var i = 3; i < nodeArgs.length; i++) {

//         if (i > 3 && i < nodeArgs.length) {

//             spotifyThis = spotifyThis + "+" + nodeArgs[i]
//         }

//         else {
//             spotifyThis += nodeArgs[i];
//         }
//     }
// }