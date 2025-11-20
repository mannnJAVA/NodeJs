const express = require("express");
const storeRouter = express.Router();

const homesController = require("../controllers/storeController.js");

// Existing routes
storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/favourites", homesController.getFavouriteList);
storeRouter.get("/homes/:homeId", homesController.getHomeDetails);
// 👉 Add Reserve Page Route
storeRouter.get("/reserve", homesController.getReserve);

module.exports = storeRouter;
