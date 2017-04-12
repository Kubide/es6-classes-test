const Person = require('./person.js');

class Policeman extends Person {
  constructor(name, surname, age = 18, ID = null, range = 'wannabe') { // es6 default values feature.
    super(name, surname, age, ID);
    this.profession = 'policeman';
    this.range = range;
  }

  fullName() {
    const fullname = super.fullName();
    return `Sir Policeman: ${fullname}`;
  }

  static carControl(car, policeman) {
    if (!car.canDrive()) {
      return 'your car is so old';
    }

    if (!car.hasDriver()) {
      return 'said: ok google!';
    }

    if (!car.driver.driverLicense) {
      return 'you can\'t drive without license';
    }

    if (!car.driver.driverLicense.validLicense()) {
      return 'your driverLicense has expired';
    }

    if (!(policeman instanceof Policeman)) {
      return 'throw a new swindle';
    }

    if (policeman.isParent(car.driver)) {
      return 'talk with another policeman, please';
    }

    return 'ok, can drive';
  }

}

module.exports = Policeman;
