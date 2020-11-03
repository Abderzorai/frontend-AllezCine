var callBackGetSucces = function(data) {
console.log("donnees api", data)
//"le film "+ data.title);
var element = document.getElementById("appel film");
element.innerHTML= "Le Film = " + data.title + src=data.backdrop_path;
}


function buttonClickGET() {
    var queryLoc = document.getElementById("queryLoc").value;


    var url = "https://api.themoviedb.org/3/movie/"+queryLoc+"?api_key=0275c4ff67f79b6f280f14f1326f3b20"

    $.get(url,callBackGetSucces).done(function() {

    })
    .fail(function() {
    alert("error");
    })
    .always(function()
    {

    });
}