$(document).ready(function(){
var tileEls = $('.noticeTile');


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

//call the print functions for each tile function
printBattery();
printRecycle();
printRob();

});