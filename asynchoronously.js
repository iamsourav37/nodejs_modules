// asynchorously
// CRUD operation
const fs = require("fs");

// fs.writeFile("message.txt", "Today is awesome day", (err) => {
//   if (err) console.log(err);
//   console.log("file is created");
// });

fs.appendFile(
  "message.txt",
  "Tomorrow is also awesome if you get early and work.",
  (err) => {
    if (err) console.log(err);
    else console.log("file append successfully");
  }
);
