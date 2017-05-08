function printRob(){

//date of loss
dol = moment("1996-05-11")
days = Math.floor(moment.duration(moment().diff(dol)).asDays());
var emoji = days == 7777 ? `\uD83C\uDF40` : '';
$(`[title="Rob"] > .noticeMessage`).text(emoji + `Rob has been gone for ${days} days` + emoji);

}