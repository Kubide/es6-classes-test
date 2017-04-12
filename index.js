const debug = require('debug')('es6-classes:main');

// Crear una clase Person que tenga: nombre y apellidos, edad, DNI, profesion
const Person = require('./models/person.js');
debug("Person Class:", Person);

const person = new Person();
debug("person Object:", person);
debug("typeof Object:", typeof person );
debug("person is an instance of the class Person?", person instanceof Person);


const paco = new Person('Paco', 'Hernandez', 30, '1234K');
debug("paco Object:", paco);

