var knownDate = moment("2017-04-10");

var weeksSince = moment().diff(knownDate,'weeks',true);

var isRecyclingWeek = weeksSince % 2 > 1;

$(document).ready(function(){
    var recycleEl = document.querySelectorAll('.recycleDays')[0];

    if(isRecyclingWeek){
        recycleEl.innerText = "None! Recycling came today!";
    }else{
        recycleEl.innerText = moment().diff(knownDate,'days');
    }
});



