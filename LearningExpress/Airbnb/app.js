const path = require("path");
const express = require("express"); // external module

const userRouter = require("./routes/userRouter"); //Local module
const hostRouter = require("./routes/hostRouter");

const rootDir = require("./utils/pathUtils");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use("/user", userRouter);
app.use("/host", hostRouter);

app.get("/", (req, res) => {
  res.redirect("/user");
});
app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is runnign on http://localhost:${PORT}`);
});
