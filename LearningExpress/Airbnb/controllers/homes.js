exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "Add New Home", currentPage: "addHome" });
};

const registeredHomes = [];

exports.postAddHome = (req, res, next) => {
  console.log("home registration successful for: ", req.body);

  // Normalize incoming data to the shape the templates expect
  const newHome = {
    id: Date.now().toString(),
    title: req.body.title || req.body.name || "Untitled Home",
    location: req.body.location || req.body.city || "Unknown location",
    price: req.body.price || req.body.cost || null,
    image: req.body.image || "/images/home.jpg",
  };

  registeredHomes.push(newHome);

  res.redirect("/user");
};

exports.getHomes = (req, res, next) => {
  console.log("registeredHomes ->", registeredHomes);
  res.render("home", {
    homes: registeredHomes,
    pageTitle: "Airbnb Home",
  });
};
