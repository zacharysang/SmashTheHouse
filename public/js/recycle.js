function printRecycle(){
var knownDate = moment("2017-04-10");

var weeksSince = moment().diff(knownDate, 'weeks', true);

var recycleEl = document.querySelectorAll('[title="Recycling"] > .noticeMessage')[0];

if(weeksSince % 2 > 1){
    recycleEl.innerText = "Recycling is coming this week!";
} else if(weeksSince % 2 == 0){
    recycling.innerText = "Recycling coming tomorrow!";
} else {
    recycleEl.innerText = "No recycling this week";
}
};



