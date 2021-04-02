const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.bgBlackBright("Hello world!"));
console.log(chalk.bgGreen("Hello") + chalk.bgRed(" World!"));

console.log(validator.isEmail("fo-)o@bar.com"));
console.log(validator.isMobilePhone("601234567845", "en-IN"));
console.log(validator.isPostalCode("123456", "IN"));
console.log(validator.isStrongPassword("@hello_World_09"));
