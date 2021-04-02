const http = require("http");

http
  .createServer((req, res) => {
    res.end("hello world");
  })
  .listen(3737, "127.0.0.1", () => {
    console.log("listening to the port no 3737");
  });
