$(document).ready(function(){

bars = $('.bar');
offsets = [];

for(var i = 0; i < bars.length; i++){
    var offsetStr = `${(i+1)*100}`;
    offsets.push(offsetStr);
    bars.css('left',offsetStr);
}

$('#start').on('click',rotateBars);



});

function rotateBars(ev){
    for(i = 0; i < bars.length; i++){
        $(bars[i]).animate({left:offsets[i]},200);

    }

    for(i = 0; i < bars.length; i++){
        //rotate offsets
        bars[i] = bars[(i+1)%6];
    }


}
