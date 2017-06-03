//on click of a cell, iterate value
$(document).ready(function(){

$('.score').on('click',iterateScore);

populate();

});

//on unload of page, save scores
$(document).on('unload',saveScores);

//take object from DB and write it into the page. Data will be a list of game objects
function populate(){

    fetch('/api/games')
    .then(function(data){
        return data.json();
    })
    .then(function(data){
        for(var i = 0; i < data.length; i++){
            loadGame(data[i]);
        }
    });

}

function loadGame(game){
    var gameRow = $(`tr.game.${game.gameName}`);
    var playerCells = gameRow.children().slice(1);
    for(var i = 1; i < playerCells; i++){
        playerCells[i].text(game.players[i].score);
    }
}

function iterateScore(ev){
    var curr = parseInt(ev.target.innerText) || 0;
    curr++;

    $(ev.target).text(curr);
}

function saveScores(){
    
}