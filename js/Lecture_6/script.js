/*
Task 1.1  функция должна получать 2 аргумента (два числа) и возвращать в наименьшее из них.
*/

function getMinValue(value1, value2) {
  if (value1 < value2) {
    return value1;
  } else {
    return value2;
  }
}

console.log(getMinValue(10, 2)); // 2


// Второй вариант решения

function getMinValue2(value1, value2) {
  return value1 < value2 ? value1 : value2;
}

console.log(getMinValue(10, 2)); // 2



/*
Task 1.2   функция должна получать неограниченное количество аргументов и возвращать в наименьшее из них.
*/

function getMinValue3() {
  return Math.min(...arguments);
}

console.log(getMinValue(2, 3, 4)); // 2

/*
Task 2   функция должна получать 2 аргумента (два обьекта) и возвращать обьект, содержащий свойства и методы предыдущих
*/

function joinObjects(obj1, obj2) {
  const result = {...obj1, ...obj2};
  return result;
};


console.log(joinObjects(obj1, obj2));


/*
Task 3   Расширить существующий обьект дополнительными служебными методами toString() и valueOf(). Использовать метод Object.defineProperty() / Object.defineProperties()
*/

const user = {
  name: 'Joe',
  age: 18
};

Object.defineProperty(user, 'toString', {
  enumerable: false, // enumerable is 'false' by default
  value: function () {
    return 'My name is' + this.name + ', ' + 'I am ' + this.age;
  }
});

for (var key in user) console.log(key);

console.log('Hello! ' + user); // 'Hello! My name isJack, I am 18'
