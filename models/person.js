const DriverLicense = require('./driverLicense.js');

class Person {
  constructor(name, surname, age = 18, ID = null, profession = 'unemployed') { // es6 default values feature.
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.ID = ID;
    this.profession = profession;
    this.driverLicense = false;
  }

  fullName() {
    return `${this.name} ${this.surname}`;
  }

  isParent(personB) {
    const personA = this; // personA == paco;
    return Person.areParents(personA, personB);
    // return this.surname === person.surname;
  }

  get(param) {
    // paco['names']['firstName'] === paco.names.firstName
    return this[param];
  }

  getThis() {
    return this;
  }

  static areParents(personA, personB) {
    return personA.surname === personB.surname;
  }

  addDriverLicense(driverLicense) {
    if (driverLicense instanceof DriverLicense) {
      this.driverLicense = driverLicense;
      return this.driverLicense;
    }
    return false;
  }

}

module.exports = Person;
