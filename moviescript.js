// var apiKey = "6e42aba18accf15f6000946c4a42e940";
// var queryURL = "https://api.themoviedb.org/3/movie/" + movieid + "?api_key=6e42aba18accf15f6000946c4a42e940";
var adultContent = "true";
var clickedmovieGenre = [];
var movieThemes = "";
// var masterQuery = queryURL + "/api_key=" + apiKey + "&language=en-US" + "&sort_by=primary_release_date.desc&include_adult=" + adultContent + "&include_video=false&page=1&primary_release_date.gte=2020-03-11&primary_release_date.lte=2020-12-31&with_genres=" + movieGenre + "," + movieThemes;

// var imgUrl = "https://image.tmdb.org/t/p/original"

var box = $('input').defaultChecked;

$('input').on('click', function () {
  console.log("box:" + box);
  console.log("this:" + $(this).prop("checked"));

  //var box = this.defaultChecked;
  //console.log(box)

  if ($(this).prop("checked") === true) {

    //box = true

    var boxvalue = this.value;
    //var index = clickedmovieGenre.findIndex(boxvalue);
    //console.log(index)
       //if (clickedmovieGenre.indexOf(boxvalue) != -1) {
        clickedmovieGenre.push(boxvalue);
console.log("index of value " + clickedmovieGenre.indexOf(boxvalue))
        console.log('44444' + clickedmovieGenre);
        //console.log(this.value);
        console.log($(this).attr('id'));
      }
  
  //in this array if the value is found then remove it
   else {
    //var box = this.defaultChecked;
    //box = false;
    var boxvalue = this.value;

    console.log("before clicked" + box)
    clickedmovieGenre.splice(clickedmovieGenre.indexOf(boxvalue), 1);
    console.log('000000' + clickedmovieGenre);
    //console.log(boxvalue);

  
}
})
  //https://developers.themoviedb.org/3/discover/movie-discover
  // function for search
  // $("#actionBtn").on("click", function (event) {
  //   event.preventDefault()
  //   // function when boxes have checked
  //   $('.checkbox').each(function () {
  //     // your code here
  //     var checked = $(this).is(":checked")
  //     console.log(checked)
  //     if (checked) {
  //       console.log($(this).attr("value"))
  //       movieGenre = $(this).attr("value")
  //       masterQuery = queryURL + "&language=en-US" + "&sort_by=primary_release_date.desc&include_adult=" + adultContent + "&include_video=false&page=1&primary_release_date.gte=2020-03-11&primary_release_date.lte=2020-12-31&with_genres=" + movieGenre + "," + movieThemes;
  //       $.ajax({
  //         url: masterQuery,
  //         method: "GET"
  //       }).then(function (response) {
  //         console.log(response);
  //         var movieid = JSON.parse(response.id);
  //         $.ajax({
  //         })
  //         // image div has been created dynamically 
  //         var img = $("<img>")

  //         console.log(imgUrl + response.poster_path)
  //         img.attr("src", imgUrl + response.poster_path)
  //         img.attr("class", "images")

  //         $("#imgDiv").append(img)
  //       })
  //     }


  //   })


  // })



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