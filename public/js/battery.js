// try to get the batter status
if(navigator.getBattery){
    //if navigator holds promise
    navigator.getBattery().then(readBattery);
}if(navigator.battery){
    //if navigator has battery object already (people shouldn't do this. it's old)
    readBattery(navigator.battery);
}else{
    //not supported
}


function readBattery(battery){

    //read batter status into the notice message text
    $(`[title="Battery"] > .noticeMessage`).text(`Battery: ${battery.level*100}%, Status: ${battery.charging ? 'Charging' : 'Not charging'}`);

    //read into the tile color
    if(battery.level > 0.8){
        $(`[title="Battery"] > .noticeTile`).css('background-color',`#00E500`);
    } else if(battery.level > 0.25){
        $(`[title="Battery"] > .noticeTile`).css('background-color',`yellow`);
    } else {
        $(`[title="Battery"] > .noticeTile`).css('background-color',`red`);
    }
    

}