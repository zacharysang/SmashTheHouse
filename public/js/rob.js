function printRob(){

//date of loss
dol = moment("1996-05-11")
days = Math.floor(moment.duration(moment().diff(dol)).asDays());
var emoji = '';
switch(days) {
    case 7777:
        emoji += `\uD83C\uDF40`;
        break;
}
$(`[title="Rob"] > .noticeMessage`).text(emoji + `Rob has been gone for ${days} days` + emoji);

}