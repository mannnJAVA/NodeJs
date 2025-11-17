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
  }

  static fetchAll() {
    return registeredHomes;
  }
};
