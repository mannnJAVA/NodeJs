const express = require("express");
const userRouter = express.Router();

const homesController = require("../controllers/storeController");
// List page: render using key `homes` (template expects `homes`)
userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
