const moment = require("moment")
const chalk = require("chalk")



function isDaylight(){
  if (moment().isDST()) {
    return("is")
  } else {
    return("is not")
  }
}

function isLeapYear(){
  if(moment().isLeapYear()){
    return("is not");
  } else {
  return("is")
  }
}

// module.exports = {
//   isDaylight: isDaylight,
//   isLeapYear: isLeapYear,
//   totalTimeSeconds: totalTimeSeconds
// }
