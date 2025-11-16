const express = require("express");
const hostRouter = express.Router();
// In-memory store (learning/demo only)
const homesController = require("../controllers/homes");
// Show the add-home form
hostRouter.get("/add-home", homesController.getAddHome);

// Handle form submit: normalize input, push, then redirect to listing
hostRouter.post("/add-home", homesController.postAddHome);

exports.hostRouter = hostRouter;
