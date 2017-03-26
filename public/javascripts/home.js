var loadNode = function(url, parentSelector){
    console.log('loading node!');
    var req = new XMLHttpRequest();
    req.open("GET",url);
    req.send(function(res){
        
    });

    $(parentSelector).append(req.responseText);
}

$(document).ready(function(){
    loadNode("/calendar?partial=true","#calendarframe");
});