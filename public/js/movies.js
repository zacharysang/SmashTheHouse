if(!availableMovies) var availableMovies = [];

fetch('/api/movies')
.then(function(res){
    console.log('fetch returned');
    // get the list out of the response
    return res.blob();
}).then(function(res){
    
    if(res.movies){
        availableMovies = res.movies;
    }else{
        availableMovies = [];
    }
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
