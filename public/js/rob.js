//date of loss
dol = moment("1996-05-11")
days = moment.duration(moment().diff(dol)).asDays();

$(document).ready(function(){
    $(`[title="Rob"] > .noticeMessage`).text(`Rob has been gone for ${Math.floor(days)} days`);
});