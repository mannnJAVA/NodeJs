const Favourite = require("../models/favourite");
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
  Favourite.getFavourites((favourites) => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id)
      );

      res.render("store/favourite-list", {
        homes: favouriteHomes,
        pageTitle: "Your Favourites",
      });
    });
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
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error adding to favourites:", error);
    }
  });
  res.redirect("/favourites");
};
