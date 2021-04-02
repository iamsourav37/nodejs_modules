// synchronously
// CRUD OPERATION in file system

const fs = require("fs");

// fs.mkdirSync("students");

// fs.appendFileSync("students/names.txt", "Sourav, Ratul, Amartya, Rocket");

// fs.appendFileSync("students/names.txt", ", Ashim, Anish, Pritam");

// reading
// const file_data = fs.readFileSync("students/names.txt", "utf-8");
// console.log(file_data);

// rename

// fs.renameSync("students/names.txt", "students/engineers_names.txt");

// delete
// fs.unlinkSync("students/engineers_names.txt");

// delete folder

fs.rmdirSync("students");
