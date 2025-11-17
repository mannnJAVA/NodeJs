const fs = require("fs");

const path = require("path");

const rootDir = require("../utils/pathUtils");

const registeredHomes = [];

module.exports = class Home {
  constructor(id, title, location, price, image) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.price = price;
    this.image = image;
  }

  save() {
    registeredHomes.push(this);
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
      console.log("Error writing homes data:", error);
    });
  }

  static fetchAll() {
    return registeredHomes;
  }
};
