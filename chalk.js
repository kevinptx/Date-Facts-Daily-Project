const chalk = require("chalk")

function blue(text){
  return(chalk.blue.bold(text))
}

function magenta(text) {
  return(chalk.magenta.bold(text));
}

function cyan(text) {
  return(chalk.cyan.bold(text));
}

function green(text) {
  return(chalk.green.bold(text));
}

function red(text) {
  return(chalk.red.bold(text));
}


module.exports = {
  blue: blue,
  magenta: magenta,
  cyan: cyan,
  green: green,
  red: red
}
