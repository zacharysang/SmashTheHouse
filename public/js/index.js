$(document).ready(function(){
var tileEls = $('.noticeTile');


// try to get the batter status
var battStr = '';
if(navigator.battery){
    //if navigator has battery object already (people shouldn't do this. it's old)
    readBattery(navigator.battery);
}else if(navigator.getBattery){
    //if navigator holds promise
    navigator.getBattery().then(readBattery);
}else{
    //not supported
}

//afix the notice display functionality to all noticeTiles
tileEls.each(function(index){
    var tileName = $(this).attr('title');
    $(this).hover(
        function(ev){
            $(`[title="${$(ev.target).parent().attr('title')}"] > .noticeMessage`).show();
        },
        function(ev){
            $(`[title="${$(ev.target).parent().attr('title')}"] > .noticeMessage`).hide();
        }
    );
});


});

function readBattery(battery){

    //read batter status into the notice message text
    $(`[title="Battery"] > .noticeMessage`).text(`${battery.level*100}%`);

    //read into the tile color
    if(battery.level > 0.8){
        $(`[title="Battery"] > .noticeTile`).css('background-color',`#00E500`);
    } else if(battery.level > 0.25){
        $(`[title="Battery"] > .noticeTile`).css('background-color',`yellow`);
    } else {
        $(`[title="Battery"] > .noticeTile`).css('background-color',`red`);
    }
    

}

