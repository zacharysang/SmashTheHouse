if(!availableMovies) var availableMovies = [];

fetch('/api/movies')
.then(function(res){
    console.log('fetch returned');
    // get the list out of the response
    return res.blob();
}).then(function(){
    availableMovies = [{
        "title": "f8"
        ,"description": "one last job"
        ,"releaseDate": "12/12/12"
    }
    ,{
        "title":"star wars"
        ,"description": "the ewok of the night"
        ,"releaseDate": "12/12/17"
    }
    ,{
        "title": "that one super hero movie"
        ,"description": "somethings never change, but sometimes they do.."
        ,"releaseDate": "12/12/16"
    }]
}).then(function(){
    renderMovies();
});

function renderMovies(addMovies = availableMovies){
    console.log('rendering movies..');
    var listContainer = $('ul.moviesList')
    var currMov;
    addMovies.forEach(function(mov){
        currMov = $(`<li>${mov.title} (${mov.releaseDate})</li>`,{
            "class":"movieItem"
        })
    .appendTo(listContainer);

    });
    
}
