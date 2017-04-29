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
            $(`.noticeMessage[title="${$(ev.target).attr('title')}"]`).show();
        },
        function(ev){
            $(`.noticeMessage[title='${$(ev.target).attr('title')}']`).hide();
        }
    );
});


});

function readBattery(battery){

    //read batter status into the notice message text
    $(`.noticeMessage[title='Battery']`).text(`${battery.level*100}%`);
    

}

