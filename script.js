$("#search").click(function(){
    var queryUrl = ""
    var movieName = $("#movieBtn").val()

    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    
    .then(function(respone){
        
    })
})



$('.dropdown-trigger').dropdown();

