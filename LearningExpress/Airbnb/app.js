const express = require("express"); // external module

const userRouter = require("./routes/userRouter"); //Local module
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is runnign on http://localhost:${PORT}`);
});
