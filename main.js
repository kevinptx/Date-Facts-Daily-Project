const moment = require("moment")
const momentFile = require("./moment.js")
const chalkFile = require("./chalk.js")

console.log("It is " + chalkFile.blue(moment().format("dddd MMMM Do YYYY, h:mm:ss a")));

console.log("It is the " + chalkFile.magenta(moment().format("DDDo")) + " day of the year");

console.log("It is " + chalkFile.cyan(mathConversion()) + (" seconds into the day"));

console.log(`It ${chalkFile.green(isDaylight())} during Daylight Savings Time.`);

console.log(`It ${chalkFile.red(isLeapYear())} a leap year.`);


function isDaylight(){
  if (moment().isDST()) {
    return("is")
  } else {
    return("is not")
  }
}


function isLeapYear(){
  if(moment().isLeapYear()){
    return("is");
  } else {
  return("is not")
  }
}

function mathConversion() {
  let hrToSec = (moment().format("HH") * 3600)
  let minToSec = (moment().format("mm") * 60)
  let sec = (moment().format("ss") * 1)
  let secInToday = hrToSec + minToSec + sec
  return(secInToday)
}
