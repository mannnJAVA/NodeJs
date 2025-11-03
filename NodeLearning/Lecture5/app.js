const http = require("http");
const logg = require("./logical");

const { testingSyntax } = require("./syntax");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testingSyntax();
  logg();
});

const PORT = 6060;

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
