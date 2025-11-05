//const http = require("http"); // core modules

const express = require("express"); //external module

const app = express();

app.use((req, res, next) => {
  console.log("First middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware", req.url, req.method);
  res.send("<p>Welcome to End</p>");
});

const requestHandler = require("./user"); // Local module
//const server = http.createServer(app);

const PORT = 6060;

/*server*/
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
