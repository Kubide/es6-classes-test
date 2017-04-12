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

  isParent(person) {
    const personA = this; // personA == paco;
    const personB = person; // personB == antonio;
    return Person.areParents(personA, personB);
    // return this.surname === person.surname;
  }


  static areParents(personA, personB) {
    return personA.surname === personB.surname;
  }

}

module.exports = Person;
