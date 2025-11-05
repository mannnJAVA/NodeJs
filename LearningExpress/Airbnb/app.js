const express = require("express"); // external module

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  res.send("<h1>Welcome to airbnb</h1>");
});

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is runnign on http://localhost${PORT}`);
});
