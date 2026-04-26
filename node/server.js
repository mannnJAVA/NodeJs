// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello world");
// });

// server.listen(7000);

const express = require("express");
const app = express();
app.get("/", (req, res) => 
  res.send("hello world");
);

app.get("/about", (req, res) => {

  res.send("AABOUTTTTT");
});
app.listen(7000, () => {
  console.log("Server is running on http://localhost:7000");
});
