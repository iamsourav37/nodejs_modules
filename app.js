// synchronously
// CRUD OPERATION in file system

const fs = require("fs");

// fs.mkdirSync("students");

// fs.appendFileSync("students/names.txt", "Sourav, Ratul, Amartya, Rocket");

fs.appendFileSync("students/names.txt", ", Ashim, Anish, Pritam");
