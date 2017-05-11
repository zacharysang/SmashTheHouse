//on click of a cell, iterate value
$(document).ready(function(){

$('.score').on('click',iterateScore)

function iterateScore(ev){
    var curr = parseInt(ev.target.innerText) || 0;
    curr++;

    $(ev.target).text(curr);
}

});
