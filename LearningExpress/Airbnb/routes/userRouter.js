const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");

const { registeredHomes } = require("./hostRouter");

// List page: render using key `homes` (template expects `homes`)
userRouter.get("/", (req, res, next) => {
  console.log("registeredHomes ->", registeredHomes);
  res.render("home", {
    homes: registeredHomes,
    pageTitle: "Airbnb Home",
  });
});

module.exports = userRouter;
