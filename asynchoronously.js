// asynchorously
// CRUD operation
const fs = require("fs");

// fs.writeFile("message.txt", "Today is awesome day", (err) => {
//   if (err) console.log(err);
//   console.log("file is created");
// });

// fs.appendFile(
//   "message.txt",
//   "Tomorrow is also awesome if you get early and work.",
//   (err) => {
//     if (err) console.log(err);
//     else console.log("file append successfully");
//   }
// );

// read file asynchronously
fs.readFile("message.txt", "UTF-8", (err, data) => {
  if (err) {
    console.log("error : ", err);
  } else {
    console.log("Data :", data);
  }
});

// creating a folder

// fs.mkdir("new_folder", (err) => {
//   if (err) console.log(err);
// });

// create a file in that folder

// fs.writeFile("new_folder/new.txt", "Hare Krishna", (err) => {
//   if (err) {
//     console.log("Error :", err);
//   }
// });

fs.appendFile("new_folder/new.txt", " Hare Ram", (err) => {
  if (err) console.log(err);
});
