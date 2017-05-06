$(document).ready(function(){

    $('.workingArea').on('mousedown',function(){
        //when mouse is down, fill everything moused-enter
        $('.guideBox').on('mouseenter',function(){
            toggle(this);
        });

    });

    $('.workingArea').on('mouseup',function(){
        //when mouse is lifted, stop filling everything
        $('.guideBox').off('mouseenter');
    });
});

function toggle(JEl){
        if($(JEl).hasClass('filled')){
            $(JEl).removeClass('filled');
        } else {
            $(JEl).addClass('filled');
        }

}