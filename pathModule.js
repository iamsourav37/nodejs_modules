const path = require("path");

const dir =
  "F:/ENTERTAINMENT/MY_MOVIE/FELUDA_MOVIE_COLLECTION/Baksho_Rohoshyo_(1996).mp4";

console.log("Basename :", path.basename(dir));
console.log("Extension name :", path.extname(dir));
console.log("Diractory name :", path.dirname(dir));

console.log(path.parse(dir));
console.log(path.parse(dir).name);
