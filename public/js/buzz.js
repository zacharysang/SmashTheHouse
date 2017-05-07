function listenBuzzPress(){
    $('[title="Buzz"] > .noticeTile').on('click',buzz);
}

function buzz(){
    console.log('buzz called')
    if(navigator.vibrate){
        console.log('buzzing!');
        navigator.vibrate(500);
    }
}