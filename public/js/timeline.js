$(document).ready(function(){
    $('.guideBox').click(function(){
        if($(this).hasClass('filled')){
            $(this).removeClass('filled');
        } else {
            $(this).addClass('filled');
        }
    });
});