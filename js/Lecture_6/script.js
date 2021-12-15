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

