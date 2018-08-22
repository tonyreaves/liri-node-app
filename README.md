# Liri Node app #

## How it works ##

Liri is a robot app that uses the Spotify, Online Movie Database and Twitter APIs to return information requested by users.

## How to install ##

Clone this repo to your system. Run _npm install_ to install dependencies. You'll need to get your own API keys from Twitter, the Online Movie Database and Spotify and add them to a .env file in the directory with the following format:

SPOTIFY_ID=
SPOTIFY_SECRET=
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN_KEY=
TWITTER_ACCESS_TOKEN_SECRET=

I used the OMDB api key "trilogy."

When that's set up, you can use the terminal commands below to run the app.

## How to use ##

For information about a song, type "node liri.js spotify-this" followed by the song name.

For information about a movie, type "node liri.js movie-this" followed by the movie name.

For my latest tweets, type "node liri.js my-tweets" and you'll get 20 of my latest tweets, minus replies.
