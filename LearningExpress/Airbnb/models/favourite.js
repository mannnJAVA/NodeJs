const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const Home = require("./home");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    this.getFavourites((favourites) => {
      if (!favourites.includes(homeId)) {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), (err) => {
          if (err) {
            console.log("Error writing favourite data:", err);
            return callback(err);
          }
          callback(null);
        });
      } else {
        console.log("Home already in favourites");
        callback(null);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      if (err) {
        return callback([]); // file missing → empty favourites
      }
      callback(JSON.parse(data));
    });
  }
};
