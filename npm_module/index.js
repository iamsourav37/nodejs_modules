const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.bgBlackBright("Hello world!"));
console.log(chalk.bgGreen.inverse("Hello") + chalk.bgRed.inverse(" World!"));

console.log(validator.isEmail("example@demo.com"));
console.log(validator.isMobilePhone("601234567845", "en-IN"));
console.log(validator.isPostalCode("123456", "IN"));
console.log(
  "Is password strong : ",
  validator.isStrongPassword("@hello_World_")
);
