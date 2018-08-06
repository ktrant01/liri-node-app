require("dotenv").config();



var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "5984c743cb974d0299f1ebb9b7c5216b",
  secret: "28219596b6284fa8bcb5120ec60cc22a"
});
 

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data.tracks.items[0].album.artists[0].name); 
//   console.log(data.tracks.items[0].name); 
//   console.log(data.tracks.items[0].album.name); 
//   });

 var OMDB_API_KEY="c43a8b6d"


var omdbApi = require('omdb-client');





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
    spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log("Artist:       " + data.tracks.items[0].album.artists[0].name); 
      console.log("Song Name:    " + data.tracks.items[0].name); 
      console.log("Album name:   " + data.tracks.items[0].album.name); 
      console.log("Spotify URL:  " + data.tracks.items[0].album.external_urls.spotify); 
      });
}


// * Artist(s)
     
// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from




