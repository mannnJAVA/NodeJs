const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController.js");

// Existing routes
storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavouriteList);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
// 👉 Add Reserve Page Route
storeRouter.get("/reserve", storeController.getReserve);
storeRouter.post("/favourites", storeController.postAddToFavourites);

module.exports = storeRouter;
