var apiKey = "0a730dda991c741663c9fb1810d54a8c";
var queryURL = "https://api.themoviedb.org/3/";
//https://developers.themoviedb.org/3/discover/movie-discover

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
})