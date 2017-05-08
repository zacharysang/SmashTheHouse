function listenBuzzPress(){
    $('[title="Buzz"] > .noticeTile').on('click',buzz(500));
}

function buzz(dur){
    if(navigator.vibrate){
        return function(){
            navigator.vibrate(dur);
        }
    }
}