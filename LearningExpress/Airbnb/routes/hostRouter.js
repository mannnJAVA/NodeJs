const path = require("path");
const express = require("express");

const hostRouter = express.Router();

const rootDir = require("../utils/pathUtils");

// In-memory store (learning/demo only)
const registeredHomes = [];

// Show the add-home form
hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { pageTitle: "Add New Home" });
});

// Handle form submit: normalize input, push, then redirect to listing
hostRouter.post("/add-home", (req, res, next) => {
  console.log("home registration successful for: ", req.body);

  // Normalize incoming data to the shape the templates expect
  const newHome = {
    id: Date.now().toString(),
    title: req.body.title || req.body.name || "Untitled Home",
    location: req.body.location || req.body.city || "Unknown location",
    price: req.body.price || req.body.cost || null,
    image: req.body.image || "/images/home.jpg",
  };

  registeredHomes.push(newHome);

  res.redirect("/user");
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
