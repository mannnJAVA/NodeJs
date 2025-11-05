const path = require("path");
const express = require("express");
const cont = express.Router();

const rootDir = require("../utils/pathUtils");

cont.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contactForm.html"));
});

cont.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contactSub.html"));
});

module.exports = cont;
