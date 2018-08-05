require("dotenv").config();


 
var omdbApi = require('omdb-client');

var spotify = require('spotify');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



if (process.argv[2] == "movie-this"){
    var params = {
        apiKey: 'Trilogy',
        query: process.argv[3],
        incTomatoes: true
        // year: 1984
    }

// Couldn't figure out how to get the 'omdb' npm package use api key - used 'ombd-client' which seems to have less functionality that does not meet scope of assignment. 
    omdbApi.search(params, function(err, data) {
    //    console.log(data)
       console.log("Title: " + data.Search[0].Title)
       console.log("Year: " + data.Search[0].Year)
       console.log(data)
    //    console.log(err)
    });
}


if (process.argv[2] == "spotify-this-song"){
    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
     
       console.log(data)
    });
}


 


