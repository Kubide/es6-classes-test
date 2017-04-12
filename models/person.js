class Person {
  constructor(name, surname, age = 18, ID = null, profession = 'unemployed') { // es6 default values feature.
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.ID = ID;
    this.profession = profession;
  }

  fullName() {
    return `${this.name} ${this.surname}`;
  }

}

module.exports = Person;
