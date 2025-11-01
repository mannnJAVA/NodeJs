const http = require("http");

/*function requestListener(req, res) {
  console.log(req);
}

http.createServer(requestListener);*/

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit();

  //res.setHeader("Content-Type", "json"); or we can use single quote ' '
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to Home</h1>");

    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"/><br>'
    );
    res.write(
      '<input type="email" name="email" placeholder="Enter your email"/><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="male" />');
    res.write('<br><input type="submit" value="Submit"/>');

    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Checkout our Products</h1></body>");
    res.write("</html>");
    return res.end(); // always return res.end(); if you have to fetch another request else it will end at first request
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>My Page</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server runnig on address http://localhost:${PORT}`);
});
