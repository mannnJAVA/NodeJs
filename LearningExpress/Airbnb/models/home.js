const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/pathUtils");

module.exports = class Home {
  constructor(id, title, location, price, rating, image) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.image = image;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      // Auto-generate ID if not provided
      if (!this.id) {
        this.id =
          Date.now().toString() + Math.floor(Math.random() * 10000).toString();
      }

      registeredHomes.push(this);

      const homeDataPath = path.join(rootDir, "data", "homes.json");

      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("Error writing homes data:", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
