/*
Task 1.1  функция должна получать 2 аргумента (два числа) и возвращать в наименьшее из них.
*/

function getMinValue(value1, value2) {
  if (value1 < value2) {
    return value1;
  } else {
    return value2;
  }
return result;
}

getMinValue();
console.log(getMinValue);


// Второй вариант решения

function getMinValue2(value1, value2) {
  return value1 < value2 ? value1 : value2;
}

getMinValue2();
console.log(getMinValue2);



/*
Task 1.2   функция должна получать неограниченное количество аргументов и возвращать в наименьшее из них.
*/

function getMinValue3() {
  let result = Math.min(getMinValue3());
  return result;
}

getMinValue3();
console.log(getMinValue3);



/*
Task 2   функция должна получать 2 аргумента (два обьекта) и возвращать обьект, содержащий свойства и методы предыдущих
*/

function joinObjects(obj1, obj2) {
  const result = {...obj1, ...obj2};
  return result;
};

joinObjects(obj1, obj2);
console.log(joinObjects);


/*
Task 3   Расширить существующий обьект дополнительными служебными методами toString() и valueOf(). Использовать метод Object.defineProperty() / Object.defineProperties()
*/

const user = {
  name: 'Joe',
  age: 18
};
user.car = true;

Object.defineProperty(user, 'hobby', {
	set(value) 
	{this.description = `My hobby is ${value}`;
	}
});

console.log(user.description);	

user.hobby = 'cycling';

console.log(user);

Object.defineProperties(user, {
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
let objValue = Object.values(user);
let objKeys = Object.keys(user);

console.log(objValue);  
console.log(objKeys);  	
console.log(user.toString());
console.log(user.valueOf());


