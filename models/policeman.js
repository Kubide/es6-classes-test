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

}

module.exports = Policeman;
