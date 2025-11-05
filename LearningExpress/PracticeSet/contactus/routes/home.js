const path = require("path");
const express = require("express");
const hom = express();
const rootDir = require("../utils/pathUtils");

hom.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = hom;
