var availableMovies = [];
fetch('/api/movies')
.then(function(res){
    console.log('fetch returned');
    // get the list out of the response
    return res.json();
}).then(function(res){
    var moviesList;
    if(res !== undefined && res.length > 0){
        console.log('loading in movies');
        moviesList = res;
    }else{
        console.log('no movies found attached to request. passing empty arr');
        moviesList = [];
    }
    
    console.log(`json to be returned: ${JSON.stringify(moviesList)}`);
    return moviesList;
}).then(function(moviesL){
    renderMovies(moviesL);
});

function renderMovies(movies){
    console.log(`movies list from render: ${JSON.stringify(movies)}`)
    var listContainer = $('ul.moviesList')
    var currMov;
    movies.forEach(function(mov){
        currMov = $(`<li>${mov.title} (${mov.releaseDate})</li>`,{
            "class":"movieItem"
        })
    .appendTo(listContainer);
        
    });
    
}
