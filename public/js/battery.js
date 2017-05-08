function readBattery(){
    // try to get the batter status
    if(navigator.getBattery){
        //if navigator holds promise
        navigator.getBattery().then(printBattery);
    }else if(navigator.battery){
        //if navigator has battery object already (people shouldn't do this. it's old)
        printBattery(navigator.battery);
    }else{
        //not supported
        printBattery(null);
    }
}




function printBattery(battery){
    //if battery is missing, hide the tile
    if(battery == null){
        $('[title="Battery"] > .noticeTile').addClass('incompatible');
        return;
    }

    //read batter status into the notice message text
    $(`[title="Battery"] > .noticeMessage`).text(`Battery: ${battery.level*100}%, Status: ${battery.charging ? 'Charging' : 'Not charging'}`);

    //read into the tile color
    if(battery.level > 0.7){
        $(`[title="Battery"] > .noticeTile`).css('background-color',`#00E500`);
    } else if(battery.level > 0.25){
        $(`[title="Battery"] > .noticeTile`).css('background-color',`yellow`);
    } else {
        $(`[title="Battery"] > .noticeTile`).css('background-color',`red`);
    }
    

}