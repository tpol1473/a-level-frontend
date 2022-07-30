// const obj = {
//     key1: value1,
//     key2: value2,
//     key3: () => {},
//     key4: value4
// };

const car = {
    mark: 'Audi',
    model: 'S8',                //  <- свойства
    year: 2022,
    isNuw: true,
    color: 'black',

    getShortInformation: function () {                //  <- метод
        return `${this.mark} ${this.model} ${this.year}`;
    },

    greeting: function () {
        // console.log(car.model);
        console.log(`Hey, it's ${this.mark} ${this.model}`);
    }
// or
// getShortInformation () {
//     return `${this.mark} ${this.model} ${this.year}`;
// }
};

console.log(car.color);

car.greeting();

car.color = false;

console.log(car.color);

car.greeting();


//////////////////////////////////////////////////////


// objectVariable.propertyName
// objectVariable.methodName()

console.log(car.model);  // S8
console.log(car.getShortInformation());  //  Audi S8 2022

/////////////////////////////////////////////////////

let objectPropertyName = 'model';

console.log(car[objectPropertyName]);   //  S8

const searchingProperty = 'mark';

car[searchingProperty] !== car.searchingProperty;

////////////////////////////////////////////////////////


const obj = {
    'property nazv': 100,
    key: true
}

obj['property nazv'];


/////////////////////////////////////////////////

car.mark = 'Tesla';

console.log(car.mark);


/////////////////////////////////////////////////

// Delete property

console.log(car);

delete car.year;

console.log(car);


///////////////////////////////////////////////////


let obj1 = {
    value1: 1,
    value2: 2
};

let obj2 = obj1;    //  ссылка на один и тот же объект

console.log(obj1);   // { value1: 1, value2: 2 }
console.log(obj2);   // { value1: 1, value2: 2 }

obj2.value2 = 3;

console.log(obj1);  // { value1: 1, value2: 3 }
console.log(obj2);  // { value1: 1, value2: 3 }


////////////////////////////////////////////////////////

const stud1 = {
    nazv: 'Anna',
    age: 20
};

const stud2 = {
    nazv: 'Anna',
    age: 20
};

console.log(stud1 === stud2);   // false

// But

const stud3 = 5;

const stud4 = 5;

console.log(stud3 === stud4);    //  true


/////////////////////////////////////////////////////////////

let stud5 = Object.assign({}, stud1, stud2);

// or

let stud6 = { ...stud1, ...stud2};

console.log(stud5);
console.log(stud6);
console.log(stud5 === stud6);   // false


const studPersonalInfo = {
    nazv: 'Anna',
    age: 20,
    info: {
        number: 10,
        isValid: true
    }
};

const studClassInfo = {
    classes: 'Math'
};

const student = Object.assign({greeting: function () {}}, studPersonalInfo, studClassInfo);

console.log(student);

//  or 

const student2 = {
    greeting: function () {},
    ...studPersonalInfo,
    ...studClassInfo
};

console.log(student2);

console.log(JSON.stringify(student));
console.log(JSON.stringify(student2));


student2.info.isValid = false;
console.log(JSON.stringify(student));
console.log(JSON.stringify(student2));


// lodash

//////////////////////////////////////////////////////////////////

// Descriptors

//  writable: true, 
//  enumerable: true, 
//  configurable: true

const studentPersonalInfo = {
    nazv: 'Max',
    age: 20,
    info: {
        number: 10,
        isValid: true
    }
};

studentPersonalInfo.nationality = 'ukrainian';

Object.defineProperty(studentPersonalInfo, 'password', {
    value: "test1234", 
    writable: false, 
    enumerable: true, 
    configurable: false
});

Object.defineProperty(studentPersonalInfo, 'pinkod', {
    value: "12345678", 
    writable: true,
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(studentPersonalInfo, 'nationality'));
console.log(Object.getOwnPropertyDescriptor(studentPersonalInfo, 'pinkod'));
console.log(Object.getOwnPropertyDescriptor(studentPersonalInfo, 'password'));

console.log(studentPersonalInfo);
// Object { value: "ukrainian", writable: true, enumerable: true, configurable: true }


////////////////////////////////////////////////////////////////////////

// configurable:

let object2 = {};

Object.defineProperty(object2, 'city', {
    configurable: false,
    value: 'Kyiv'
});

object2.city = 'Odessa';  // ignore
delete object2.city; // ignore

const object3 = {};

Object.defineProperty(object3, 'city', {
    configurable: true,
    value: 'Odessa'
});

console.log(Object.getOwnPropertyDescriptor(object2, 'city'));
console.log(Object.getOwnPropertyDescriptor(object3, 'city'));

console.log(object2);
console.log(object3);

////////////////////////////////////////////////////////////////

// enumerable:

let country = {
    country: 'Ukraine'
};

Object.defineProperty(country, 'capital', {
    enumerable: false,
    value: 'Kyiv'
});

for(let property in country) {
    console.log(property)
};

// result:  'country'
// 'capital' is ignored

// it enumerable: false,  then take this property with ->  console.log(country.capital);

console.log(country.capital);   //  Kyiv


//////////////////////////////////
// Object.defineProperties()

const avto = {};

Object.defineProperties(avto, {
    mark: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'BMW'
    },
    model: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'X8'
    }
});

console.log(avto);   //  { mark: 'BMW', model: 'X8' }

///////////////////////////////////////////////////////////////

// Object.getOwnPropertyDescriptor()

const mash = Object.defineProperty({}, 'mark', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: 'Mercedes'
});

let mashDescriptor = Object.getOwnPropertyDescriptor(mash, 'mark');

console.log(mash);   //  {}

console.log(mashDescriptor);   //  {value: 'Mercedes', writable: true, enumerable: false, configurable: true}

/////////////////////////////////////////////////////

// Object.keys()

const transp = {
    mark: 'Tesla',
    model: 'T1803',
    color: {
        numb: 11,
        isValid: true
    },
    year: 2022
};

let transpKeys = Object.keys(transp);
let transpValues = Object.values(transp);

console.log(Object.keys(transp));   //  [ 'mark', 'model', 'color', 'year' ]   --- becose for only with enumerable: true

console.log(Object.values(transp));   //  [ 'Tesla', 'T1803', { numb: 11, isValid: true }, 2022 ]  --- becose for only with enumerable: true



Object.defineProperty(transp, 'mark', {enumerable: false});

console.log(transpKeys);   //  [ 'mark', 'model', 'color', 'year' ]
console.log(transpValues);   //  [ 'Tesla', 'T1803', { numb: 11, isValid: true }, 2022 ]

console.log(Object.keys(transp));   // [ 'model', 'color', 'year' ]   --- becose for only with enumerable: true
console.log(Object.values(transp));   // [ 'T1803', { numb: 11, isValid: true }, 2022 ] --- becose for only with enumerable: true


/////////////////////////////////////////////////////

// Object.assign()

let objTarget = {mark: 'Mitsubishi'};
let objTarget1 = {model: '6'};
let objTarget2 = {year: 2022};
let objTarget3 = {color: 'red'};

let targets = Object.assign(objTarget, objTarget1, objTarget2, objTarget3);

console.log(targets);  // { mark: 'Mitsubishi', model: '6', year: 2022, color: 'red' }

///////////////////////////////////////////////////////////////

// Object.freeze()

let objTarg = Object.freeze({mark: 'Infinity'});

objTarg.mark = 'BMW';   //  ignored
console.log(objTarg);  //   {mark: 'Infinity'}

// Object.isFrozen()

let bul = Object.isFrozen(objTarg);

console.log(bul);  //  true
console.log(Object.isFrozen(objTarg));  //  true

// but if copies object

const objTarg2 = { ... objTarg};

console.log(Object.isFrozen(objTarg2));  // false

//  for it only copies with freeze()

const objTarg3 = Object.freeze({ ... objTarg});

console.log(Object.isFrozen(objTarg3));  //  true


//////////////////////////////////////////////////

// Object.entries()

console.log(Object.entries(targets));  //  [ [ 'mark', 'Mitsubishi' ],    [ 'model', '6' ],    [ 'year', 2022 ],    [ 'color', 'red' ]  ]


///////////////////////////////////////////////////

// Object.preventExtensions()

let objT = Object.preventExtensions({mark: 'Tesla'});

objT.mark = 'Mercedes';
objT.model = 'X8';   // ignored

console.log(objT);  // { mark: 'Mercedes' }

// Object.isExtensible()

console.log(Object.isExtensible(objT));  // false

/////////////////////////////////////////////////////

//  Object.prototype()

const objZ = {};

console.log(objZ);  

//  Object { } ->  
//  <prototype>: Object { … }
// ​​
// __defineGetter__: function __defineGetter__()
// ​​
// __defineSetter__: function __defineSetter__()
// ​​
// __lookupGetter__: function __lookupGetter__()
// ​​
// __lookupSetter__: function __lookupSetter__()
// ​​
// __proto__: 
// ​​
// constructor: function Object()
// ​​
// hasOwnProperty: function hasOwnProperty()
// ​​
// isPrototypeOf: function isPrototypeOf()
// ​​
// propertyIsEnumerable: function propertyIsEnumerable()
// ​​
// toLocaleString: function toLocaleString()
// ​​
// toString: function toString()
// ​​
// valueOf: function valueOf()
// ​​
// <get __proto__()>: function __proto__()
// ​​
// <set __proto__()>: function __proto__()

console.log(objZ.toString());   //  [object Object]

console.log(objZ.valueOf());   //  {}


console.log(objZ + '123');   //  [object Object]123

let person = {
    firstName: '',
    lastName: '',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

let driver = {
__proto__: person,
driverExpirience: 5
};

driver.firstName = 'John';
driver.lastName = 'Malkovich';

console.log(driver);   //   { driverExpirience: 5, firstName: 'John', lastName: 'Malkovich' }
console.log(driver.getFullName());   // John Malkovich


////////////////////////////////////////////////////////////

// Object.setPrototypeOf()

console.log(Object.setPrototypeOf(driver, person));  //  { driverExpirience: 5, firstName: 'John', lastName: 'Malkovich' }

console.log(Object.getPrototypeOf(driver));  //  { firstName: '', lastName: '', getFullName: [Function: getFullName] }