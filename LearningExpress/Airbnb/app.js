const path = require("path");
const express = require("express");

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const storeRouter = require("./routes/storeRouter");
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: true }));

// FIXED: Store router must be mounted PROPERLY
app.use("/", storeRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use("/user", userRouter);
app.use("/host", hostRouter);

app.get("/", (req, res) => {
  res.redirect("/user");
});

// 404 Handler
app.use(errorController.get404);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
