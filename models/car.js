const Vehicle = require('./vehicle');
const Person = require('./person');

class Car extends Vehicle {
  constructor() {
    super();
    this.wheels = 4;
    this.doors = 5;
    this.year = new Date().getFullYear();
  }

  newDriver(driver) {
    if (driver instanceof Person) {
      this.driver = driver;
      return this.driver;
    }
    return false;
  }

}

module.exports = Car;
