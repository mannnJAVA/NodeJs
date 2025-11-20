const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Add New Home",
    currentPage: "addHome",
  });
};

exports.getHostHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    console.log("Registered Homes ->", registeredHomes);

    res.render("host/host-home-list", {
      pageTitle: "Host Homes list",
      currentPage: "host-home",
      homes: registeredHomes,
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { id, title, location, price, rating, image } = req.body;

  const home = new Home(id, title, location, price, rating, image);
  home.save();

  res.render("host/homeAdded", {
    pageTitle: "Home Added",
    currentPage: "homeAdded",
  });
};
