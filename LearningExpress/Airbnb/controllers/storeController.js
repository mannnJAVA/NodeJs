const Home = require("../models/home");

// =====================
// Get Home Page (Index)
// =====================
exports.getIndex = (req, res) => {
  Home.fetchAll((homes) => {
    res.render("store/index", {
      homes: homes,
      pageTitle: "Home | Airbnb Clone",
    });
  });
};

// =====================
// Get All Homes
// =====================
exports.getHomes = (req, res) => {
  Home.fetchAll((homes) => {
    res.render("store/homes-list", {
      homes: homes,
      pageTitle: "Homes",
    });
  });
};

// =====================
// Get Bookings
// =====================
exports.getBookings = (req, res) => {
  res.render("store/bookings", {
    pageTitle: "Your Bookings",
  });
};

// =====================
// Get Favourites
// =====================
exports.getFavouriteList = (req, res) => {
  res.render("store/favourite-list", {
    pageTitle: "Your Favourites",
  });
};

// =====================
// ⭐ Get Home Details Page
// =====================
exports.getHomeDetails = (req, res) => {
  const homeId = req.params.homeId;

  Home.findById(homeId, (home) => {
    if (!home) {
      return res.status(404).render("404", { pageTitle: "Home Not Found" });
    }

    // ⭐ IMPORTANT: Pass `home` to the EJS file
    res.render("store/home-details", {
      home: home,
      pageTitle: home.title,
    });
  });
};

// =====================
// Reserve Page
// =====================
exports.getReserve = (req, res) => {
  res.render("store/reserve", {
    pageTitle: "Reserve Now",
  });
};

exports.postAddToFavourites = (req, res) => {
  console.log("Added to favourites", req.body);
  res.redirect("/fovourites");
};
