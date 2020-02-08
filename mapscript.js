$(document).ready(function() {

    var apiKey = "AIzaSyDOUt_Y2zj4z7__xoZXSyHIuytethFVuoI"; 
   
    //Request the lat/long of the current User
       navigator.geolocation.getCurrentPosition(function(position) {
       window.lat = position.coords.latitude;
       window.long = position.coords.longitude;   
       var lat = position.coords.latitude;
       var long = position.coords.longitude;
       placesURLBuilder(lat, long)
     })
   
     //Add the Lat Long to the build the URL for the Google Places API
     function placesURLBuilder(lat, long){
         var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
         queryURL =  queryURL+lat+","+long+"&radius=2000&type=movie_theater&key="+apiKey;
         placesAJAXCall(queryURL);
     }
     //AJAX Call to Google Places API
     function placesAJAXCall (queryURL){
       jQuery.ajaxPrefilter(function(options) {
           if (options.crossDomain && jQuery.support.cors) {
               options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
           }
       });
       $.ajax({
           url: queryURL,
           method: "GET"
         }).then(function(placesData){
             formatMovieLocations(placesData);
         })      
     }
     
     //pull the movie theatres from the Places API and place them into an array for lat/long
     function formatMovieLocations(placesData){
       window.latArr = [];
       window.longArr = [];
         for (var i=0; i<placesData.results.length; i++){
             window.latArr.push(placesData.results[i].geometry.location.lat)
             window.longArr.push(placesData.results[i].geometry.location.lng)
         }
         //Call the Google Maps API
         mapsAJAXCall();
     }
     
   //AJAX call for the Google Maps API
   function mapsAJAXCall(){
       $.ajax({
           url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDOUt_Y2zj4z7__xoZXSyHIuytethFVuoI&callback=initMap",
           method: "GET"
         })
     } 
   });
   
   //Callback Function for the Google Maps API
   function initMap() {
       console.log(window.latArr);
       console.log(window.longArr);
       console.log(window.lat, window.long)
       
       // The location of the user
     var currentLocation = {lat: window.lat, lng: window.long};
   
     // The map, centered at Current Location of User
     var map = new google.maps.Map(
         document.getElementById('map'), {zoom: 14, center: currentLocation});
   
     var icons = {
       theater: {
         icon:'theater_icon.svg'
       }
     }
   
     //For Loop to generate icons for each movie theater
     for (let i = 0; i<window.latArr.length; i++){
       new google.maps.Marker({position: {lat: window.latArr[i], lng: window.longArr[i]}, icon: 'theatre_icon.svg', map: map})
     }
   
     //Generate a location marker for the current user
     new google.maps.Marker({position: {lat: window.lat, lng: window.long}, map: map})
   }
   
   