const debug = require('debug')('es6-classes:main');

const Person = require('./models/person.js');
const Policeman = require('./models/policeman.js');
const Car = require('./models/car.js');
const DriverLicense = require('./models/driverLicense.js');

// Crear una clase Person que tenga: nombre y apellidos, edad, DNI, profesion
debug('Person Class:', Person);

const person = new Person();
debug('person Object:', person);
debug('typeof Object:', typeof person);
debug('person is an instance of the class Person?', person instanceof Person);


const paco = new Person('Paco', 'Hernandez', 30, '1234K');
debug('paco Object:', paco);

// Crear un método que nos de nombre y apellido
debug('paco name and surname:', `${paco.name} ${paco.surname}`);
debug('paco name and surname method:', paco.fullName());

const antonio = new Person('Antonio', 'Hernandez');

// Ejemplos de this
debug('General this', this);
debug('Paco\'s this', paco.getThis());
debug('Antonio\'s this', antonio.getThis());

// Ejemplos de parámetros dinámicos
debug('Get paco\'s name property', paco.name);
debug('Get paco\'s name by method', paco.get('name'));


// Si dos personas son familiares.
// De forma dinámica
debug('Is Antonio a parent of Paco?', paco.isParent(antonio));

// De forma estática
debug('Are Antonio and Paco parents?', Person.areParents(antonio, paco));

// Added a new policeman
const angel = new Policeman('Ángel', 'Madero');
debug('person Object:', angel);
debug('typeof Object:', typeof angel);
debug('person is an instance of the class Person?', angel instanceof Person);
debug('person is an instance of the class Person?', paco instanceof Policeman);
debug('person is an instance of the class Person?', angel instanceof Policeman);


debug('angel name and surname method:', angel.fullName());

// I buy a new car
const kiaCarens = new Car();
debug('car Object:', kiaCarens);
debug('can Drive?:', kiaCarens.canDrive());
debug('has Driver?:', kiaCarens.hasDriver());
debug('Add a new driver:', kiaCarens.newDriver(paco));
debug('has Driver?:', kiaCarens.hasDriver());


// New DriverLicense
const driverLicense = new DriverLicense(paco);
debug('driverLicense', driverLicense);
debug('driverLicense renewlicense', driverLicense.renewLicense(true));
debug('Check if Paco has the driverLicense', paco.driverLicense);
debug('Give the driverLicense to Paco', paco.addDriverLicense(driverLicense));
debug('Check if Paco has the driverLicense', paco.driverLicense);
debug('Check Paco', paco);
debug('Circular reference:', paco.driverLicense.driver.driverLicense);


// Control de policia
debug('car control:', Policeman.carControl(kiaCarens, angel));
