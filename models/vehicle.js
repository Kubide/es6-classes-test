// abstract class
class Vehicle {
  constructor() {
    this.wheels = null;
    this.doors = null;
    this.driver = null;
    this.year = null;
  }

  hasDriver() {
    return (this.driver !== null);
  }

  canDrive() {
    return (this.year >= 1990);
  }

}

module.exports = Vehicle;
