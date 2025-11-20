const express = require("express");
const hostRouter = express.Router();
// In-memory store (learning/demo only)
const hostController = require("../controllers/hostController");
// Show the add-home form
hostRouter.get("/add-home", hostController.getAddHome);

// Handle form submit: normalize input, push, then redirect to listing
hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomes);

module.exports = hostRouter;
