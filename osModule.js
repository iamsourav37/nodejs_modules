const os = require("os");

console.log(os.arch());

console.log("Free memory : ", os.totalmem() / 1024 / 1024 / 1024);
console.log("Free memory : ", os.freemem() / 1024 / 1024 / 1024);

console.log("Host name : ", os.hostname());
console.log(os.platform());

console.log(os.release());

console.log(os.type());
