fetch('/api/movies')
.then(function(res){
    // get the list out of the response
   return res.json();
})
.then(function(res){
    var moviesList;
    if(res != {} && res !== undefined && res.length > 0){
        moviesList = res;
    }else{
        moviesList = [];
    }
    
    return moviesList;
}).then(function(moviesL){
    renderMovies(moviesL);
});

function renderMovies(movies){
    var listContainer = document.querySelector('ul.moviesList');
    var currMov;
    movies.forEach(function(mov){
        currMov = renderMovie(mov);
        listContainer.appendChild(currMov);
        
    });    
}

function renderMovie(mov){
    var movieLi = document.createElement('li');
    movieLi.setAttribute('class','movieItem');

    var headerDiv = document.createElement('div');
    headerDiv.setAttribute('class','movieHeader');
    headerDiv.innerText = `${mov.title} (${mov.releaseDate})`;

    var descDiv = document.createElement('div');
    descDiv.setAttribute('class','movieDesc');
    descDiv.innerText = mov.description;

    movieLi.appendChild(headerDiv);
    movieLi.appendChild(descDiv);

    return movieLi;
}

