var apiKey = "6e42aba18accf15f6000946c4a42e940";
var queryURL = "https://api.themoviedb.org/3/movie/550?api_key=6e42aba18accf15f6000946c4a42e940";
var adultContent = ""
var movieGenre = ""
var movieThemes = ""
var masterQuery = queryURL + "/api_key=" + apiKey + "&language=en-US" + "&sort_by=primary_release_date.desc&include_adult=" + adultContent + "&include_video=false&page=1&primary_release_date.gte=2020-03-11&primary_release_date.lte=2020-12-31&with_genres=" + movieGenre + "+" + movieThemes;
var genreArray = "genres";

var imgUrl = "https://image.tmdb.org/t/p/original"

//https://developers.themoviedb.org/3/discover/movie-discover
$("#actionBtn").on("click", function (event) {
  event.preventDefault()

  $('.checkbox').each(function () {
    // your code here
    var checked = $(this).is(":checked")
    console.log(checked)
    if (checked) {
      console.log($(this).attr("value"))
      movieGenre = $(this).attr("value")
      masterQuery = queryURL + "&language=en-US" + "&sort_by=primary_release_date.desc&include_adult=" + adultContent + "&include_video=false&page=1&primary_release_date.gte=2020-03-11&primary_release_date.lte=2020-12-31&with_genres=" + movieGenre 
      $.ajax({
        url: masterQuery,
        method: "GET"
      }).then(function (response) {
        console.log(response);

            var img = $("<img>")

            console.log(imgUrl + response.poster_path)
            img.attr("src" ,imgUrl + response.poster_path)
            img.attr("class","images")

            $("#imgDiv").append(img)
      })
    }


  })


})



// // master request
//   $.ajax({
//     url: masterQuery,
//     dataType: "json",
//     method: "GET",
//     success: function (result) {

//       console.log(result);
//     }
//   });

//   // poster
//   $.ajax({
//     url: "https://api.themoviedb.org/3/movie/" + movieid + "images?/api_key=91d8d1139d528d9e3b0afd708d8b9602&language=en-US",
//     dataType: "json",
//     success: function (result) {

//       console.log(result)
//     }
//   })
//   // // title(movieid)
//     parse(data.)
//   // })
//   // // rating(movieRating)
//     parse(data.)
//   // })
//   // // description(movieDescription)
//     parse(data.)
//   // })
//   // // release date(movieDate)
//     parse(data.)
//   // })
//   // *************************************************
//   // user parameters to select

//   // film rating adult content true/false
//   if ($('adultContent') > true) {
//     adultContent = "true"
//   } else {
//     adultContent = "false"
//   }

//   // movie genre(movieGenre)


