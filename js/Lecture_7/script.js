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
 
 // Part 1
  const createArraysWithObjects = (firstName, lastName) => ({firstName: firstName, lastName: lastName}));
	
	console.log(result);
	
 
 // Part 2
	const createArraysWithObjects2 = (firstName, lastName, age) => ({firstName: firstName, lastName: lastName, age: age}));
	
	console.log(result);
  
  
  
  /*
 Task 3
 */
 
  const filterArray = (arr, conditionNumber) => {
	let result = arr.filter(element => element > conditionNumber);
	console.log(result); //  
  
  
 
 
 
