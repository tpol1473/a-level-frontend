/** 
* Task 3
*/

function searchSubstringAmount (initialString, searchingSubstring) {
    let initialString = prompt('Enter your search data:', );
    let searchingSubstring = prompt('Enter the desired value:', );
    let value = 0;
    let result;
    let arr = initialString.split(' ');
  
    //value = (initialString.split(${searchingSubstring}).length - 1);
    //console.log(initialString.split(${searchingSubstring}).length - 1); //
    //console.count(initialString.includes(${searchingSubstring}));
  
    arr.forEach(function(value) {
      if (arr[value] = searchingSubstring) {
        ++value;
        result =  `'Count of the character: ' + value + '.'`;
      else
        result = 'Data not found.';
      }
    console.log(result);
    return result;
    }


searchSubstringAmount(initialString, searchingSubstring);  // or searchSubstringAmount(); ??????  

/** 
* Example
* const initialString = 'Hello world';
* searchSubstringAmount (initialString, 'world'); // 1
* searchSubstringAmount (initialString, 'o'); // 2
* searchSubstringAmount (initialString, 'l'); // 3
* searchSubstringAmount (initialString, 'cat'); // There is not 'cat' in the initial string.;
*/
