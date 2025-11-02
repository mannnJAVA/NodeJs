const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/home") {
    res.write("<h1>Welcome to home</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Mens Section</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Womens Section</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Kids Section</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Cart Section</h1>");
    return res.end();
  }
  res.write(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </head>
  
</body>
</html>
    `);
  res.end();
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
