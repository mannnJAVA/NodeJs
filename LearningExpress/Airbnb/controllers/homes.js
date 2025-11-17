const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add New Home",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const { id, title, location, price, image } = req.body;

  const home = new Home(id, title, location, price, image);
  home.save();

  // Redirect to user homepage after saving
  return res.redirect("/user");
};

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    console.log("Registered Homes ->", registeredHomes);

    res.render("home", {
      pageTitle: "All Homes",
      currentPage: "home",
      homes: registeredHomes,
    });
  });
};
