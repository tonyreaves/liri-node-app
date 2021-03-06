//calls .env file and keys.js
require("dotenv").config();

//global variables, including keys from the env file
var keys = require("./keys.js");
var request = require('request')
var Spotify = require('node-spotify-api')
var twitter = require('twitter');
var client = new twitter(keys.twitter);
var spotifyApi = new Spotify(keys.spotify);
var nodeArgs = process.argv;
var movie = "";
var doThis = "";
var heyLiri = nodeArgs[2];

//========JSON requests =====================================================

if (nodeArgs[2] === "do-what-it-says") {

    var fs = require("fs");
    
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
      
        // We will then print the contents of data
        console.log(data);
      
        var doThis = data;
      
        var heyLiri = doThis;
      });
      
}

//TWITTER
//activates twitter get
else if (heyLiri === "my-tweets") {

    //I want the API to return last 20 tweets and when they were created
    var params = { screen_name: '@TonyJabroni8', count: 20, include_rts: false, exclude_replies: true };
    var tweets = {};
    //calling Twitter
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var t = 0; t < tweets.length; t++) {
                console.log(tweets[t].text);
                console.log(tweets[t].created_at);
            }
        }

        else {
            console.log("There was an error.")
        }
    });
}


//OMDB================
// Activates omdb search
if (heyLiri === "movie-this") {

    //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    if (nodeArgs[3] === undefined) {
        var movie = "Mr.+Nobody"
    }

    //looks for additional words in search term, puts + between words
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

    //the query url
    var movieQuery = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    // Request module on a URL with a JSON
    request(movieQuery, function (error, response, body) {
        // If no errors and rxesponse code is 200 
        if (!error && response.statusCode === 200) {

            // Print out the omdb return
            console.log("=====================");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("iMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
        else console.log("There was an error.")
    }
    )

}

//SPOTIFY==============
//Activate spotify search
else if (heyLiri === "spotify-this-song") {
    //If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (nodeArgs[3] === undefined) {
        var song = "The+Sign+Ace+of+Base"
    }

    else {
        for (var s = 3; s < nodeArgs.length; s++) {
            if (s > 3 && s < nodeArgs.length) {
                var song = song + "+" + nodeArgs[s]
            }

            else {
                song = nodeArgs[s];
            }
        }
    }
    console.log(song);
    spotifyApi.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0].artists[0].name)
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].preview_url)
        console.log(data.tracks.items[0].album.name)
    });

}



else if (heyLiri === "tea-earl-grey-hot") {
    console.log("Sorry, the replicator is in the shop.")
}