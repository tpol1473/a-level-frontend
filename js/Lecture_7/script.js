/*
 Task 1
 */
 const findVowelsCount = (inputString) => {
 
 const arrFromString = inputString.split('');
 
 const filteredArray = arrFromString.filter(function (letter) {
	 return 'aeiouy'.includes(letter.toLowerCase());
 });
	 
 const result = filteredArray.length;
 return result;
 };

findVowelsCount('Tatiana');
 
 
 
 
 
 /*
 Task 2
 */
 
const createArraysWithObjects = (name1, name2) => {
  const obj1 = {name: name1, id: 1};
  const obj2 = {name: name2, id: 2};

  console.log([obj1, obj2]);
};
  
  
  
  /*
 Task 3
 */
 
  const filterArray = (arr, conditionNumber) => {
	let result = arr.filter(element => element > conditionNumber);
	console.log(result); //  
	}
  
 
 
 
