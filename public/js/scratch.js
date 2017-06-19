//proof that you can (or cannot) come back from a callback

//this function takes an arg and a callback
function callbackCall(arg,fun) {
    console.log(`arg: ${arg}`);

    fun();

}


//now try to get the callback to return a function
var res = 0;
var myPromise = new Promise(function(resolve,reject){
    
});
res = callbackCall(5,function(){

})


//code for async typing thing
console.log(`res: ${res}`);

$(document).ready(function(){
    $('input.in').on('keypress',sendKey);
    $('input.reset').click(function(ev){
        $('input.in').val('');
        $('input.out').attr('value','');
    });
});

//takes keypress event and sends it asyncronously to the out box
function sendKey(ev){

    //get key as str
    var chr = String.fromCharCode(ev.charCode);

    //wait
    setTimeout(printKey(chr),(Math.random()*500) + 500);
}

function printKey(key){
    return function(){
        //this is done in a callback
        var outBox = $('input.out');
        $(outBox).attr('value',`${$(outBox).attr('value') || ''}` + key);
    }
}