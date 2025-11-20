const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      pageTitle: "airbnb Home",
      currentPage: "index",
      homes: registeredHomes,
    });
  });
};

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      pageTitle: "All Homes",
      currentPage: "home",
      homes: registeredHomes,
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/bookings", {
      pageTitle: "My Bookings",
      currentPage: "bookings",
    });
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourite-list", {
      pageTitle: "My Favourites",
      currentPage: "favourites",
    });
  });
};

exports.getReserve = (req, res) => {
  res.render("store/reserve", {
    pageTitle: "Reserve Home",
    currentPage: "reserve",
  });
};

exports.getHomeDetails = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    console.log("Registered Homes ->", registeredHomes);

    res.render("store/home-list", {
      pageTitle: "All Homes",
      currentPage: "home",
      homes: registeredHomes,
    });
  });
};
