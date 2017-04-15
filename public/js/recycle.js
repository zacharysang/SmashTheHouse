var knownDate = moment("2017-04-09");

var weeksSince = moment().diff(knownDate,'weeks',true);

var isRecyclingWeek = weeksSince % 2 > 1;

if(isRecyclingWeek){
    $('html').css('background-color','green');
}
