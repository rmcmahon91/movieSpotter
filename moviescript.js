
var apiKey = "6e42aba18accf15f6000946c4a42e940";
// var queryURL = "https://api.themoviedb.org/3/movie/" + movieid + "?api_key=6e42aba18accf15f6000946c4a42e940";
var adultContent = "true";
var clickedmovieGenre = [];
// var masterQuery = queryURL + "/api_key=" + apiKey + "&language=en-US" + "&sort_by=primary_release_date.desc&include_adult=" + adultContent + "&include_video=false&page=1&primary_release_date.gte=2020-03-11&primary_release_date.lte=2020-12-31&with_genres=" + clickedmovieGenre + "," + clickedmovieGenre;
// console.log(response)
var imgUrl = "https://image.tmdb.org/t/p/w185"
var movieposterid = [];
var box = $('input').defaultChecked;

function grabMovies(genreid) {
  var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=6e42aba18accf15f6000946c4a42e940&language=en-US"
    + "&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2020-03-11" + "&primary_release_date.lte=2020-12-31&with_genres=" + genreid;
  $.ajax({
    method: "GET",
    url: queryURL,
    success: function (data) {
      // console.log(data)


      var dataArr = data.results;
      for (let i = 0; i < dataArr.length; i++) {
        const element = dataArr[i];
        // console.log(element)
        var posterobj = {
          id: element.id,
          filepath: element.poster_path,
          title: element.title,
          description: element.overview,
          release: element.release_date,
        };
        movieposterid.push(posterobj);
        // console.log(posterobj)
      }
      console.log(movieposterid)

      // results: Array(20)
      // 0:
        // adult: false
        // backdrop_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
        // genre_ids: (5)[12, 18, 9648, 878, 53]
        // id: 419704
        // original_language: "en"
        // original_title: "Ad Astra"
        // overview: "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown."
        // popularity: 703.043
        // poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
        // release_date: "2019-09-17"
        // title: "Ad Astra"
        // video: false
        // vote_average: 6
        // vote_count: 2255
    
      // Call the fetch() method to fetch the image, and store it in a variable
      fetch(imgUrl + movieposterid)
        .then(res => {
          if (res.ok) {
            console.log('SUCCESS')
          } else {
            console.log('FAILURE')
          }
        })
        .then(data.movieposterid, console.log(data))
        .catch(error => console.log('ERROR'))



      // function will put resolve back inside of the original loop
      // once that is confirmed 
      // create div that takes the movie parameters
      // image div has been created dynamically 

    }
  })
}



$('input').on('click', function () {
  // console.log("box:" + box);
  // console.log("this:" + $(this).prop("checked"));

  //var box = this.defaultChecked;
  //console.log(box)

  if ($(this).prop("checked") === true) {

    //box = true

    var boxvalue = this.value;
    // var index = clickedgenreGenre.findIndex(boxvalue);
    //console.log(index)
    //if (clickedmovieGenre.indexOf(boxvalue) != -1) {
    clickedmovieGenre.push(boxvalue);
    // console.log("index of value " + clickedmovieGenre.indexOf(boxvalue))
    // console.log('44444' + clickedmovieGenre);
    //console.log(this.value);
    console.log($(this).attr('id'));
    var id = $(this).attr('id');
    // function to pass movies
    grabMovies(id);
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