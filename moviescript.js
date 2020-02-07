var apiKey = "0a730dda991c741663c9fb1810d54a8c";
var queryURL = "https://api.themoviedb.org/3/";
var masterQuery = queryURL + "/api_key=" + apiKey + "&language=en-US" + "&sort_by=primary_release_date.desc&include_adult=" + adultContent + "&include_video=false&page=1&primary_release_date.gte=2020-03-11&primary_release_date.lte=2020-12-31&with_genres=" + movieGenre + "+" + movieThemes;
//https://developers.themoviedb.org/3/discover/movie-discover

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response){
//     console.log(response);
// })
  

// master request
// onclick #submit will pull movie data and then turn to movie display function
function getMovie() {
  $.ajax({
    url: masterQuery,
    dataType: "json",
    method: "GET",
    success: function (result) {

      console.log(result);
    }
  });
}
  // movie poster will be appended to page as well as movie parameters(Title, Rating, Description, Release date)
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/" + movieid + "images?/api_key=91d8d1139d528d9e3b0afd708d8b9602&language=en-US",
    dataType: "json",
    success: function (result) {

      console.log(result)
    }
  })
    // // title(movieid)
    parse(data.)

    // // rating(movieRating)
    parse(data.)

    // // description(movieDescription)
    parse(data.)

    // // release date(movieDate)
    parse(data.)

  // *************************************************
  // user parameters to select regarding what kind of movie they would like to see

  // film rating adult content true/false
  if ($('adultContent') > true) {
    adultContent = "true"
  } else {
    adultContent = "false"
  }
