$(document).ready(function(){

    $('.workingArea').on('mousedown touchstart',function(){
        //when mouse is down, fill everything moused-enter
        $('.guideBox').on('mouseenter touchenter',function(){
            toggle(this);
        });

    });

    $('.workingArea').on('mouseup touchend',function(){
        //when mouse is lifted, stop filling everything
        $('.guideBox').off('mouseenter touchenter');
    });
});

function toggle(JEl){
        if($(JEl).hasClass('filled')){
            $(JEl).removeClass('filled');
        } else {
            $(JEl).addClass('filled');
        }

}

//add collision detection and a better way to fill grid;