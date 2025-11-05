const express = require("express");
const bosyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<h1>Welcome to The Page</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to The Page</h1>
    <a href="/contact-us">Contact us</a>
    `);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us GET", req.url, req.method);
  res.send(`<h1>Please give your details here</h1>
          <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your Name" />
            <input type="emial" name="email" placeholder="Enter your Email" />
            <input type="submit" />
          </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("First Handling", req.url, req.method, req.body);
  next();
});

app.use(bosyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly </h1>
    <a href="/">Home</a>
    `);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
