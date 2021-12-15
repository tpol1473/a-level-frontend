/** 
* Task 2
*/
let initialString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin vulputate mi, sed molestie est interdum non. Integer ut eros id dui porta elementum. Ut sit amet fringilla turpis. Sed elementum diam sed blandit consequat. Fusce convallis tellus non risus tempor finibus. Cras ex erat, sollicitudin et sapien vitae, interdum viverra massa. Curabitur mollis nec mauris dignissim ultrices. Mauris molestie tortor sed arcu congue, in congue magna cursus. Pellentesque dictum leo ac est consectetur imperdiet. Ut a vehicula libero. Nunc eu ultrices diam.';
let searchingSubstring = prompt('Enter the desired value:');

function searchSubstringIndex (initialString, searchingSubstring) {
    let value;
    let result;
  
    value = initialString.indexOf(searchingSubstring);

    console.log(initialString.indexOf(searchingSubstring)); //

      if (initialString.includes(searchingSubstring)) {
      result = 'The index of the first occurrence of the character: ' + value + '.';
      } else {
      result = 'There is not ' + value + ' in the initial string.';
      }
    
    console.log(result);
    return result;
/*
      if (value > 0) {
      result = 'The index of the first occurrence of the character: ' + value + '.';
      } else {
      result = 'Data not found.';
      }
    return result;
*/
}

searchSubstringIndex (initialString, searchingSubstring);  // or searchSubstringAmount(); ??????  

/** 
* Example
* const initialString = 'Hello world';
* searchSubstringIndex (initialString, 'world'); // 6
* searchSubstringIndex (initialString, 'cat'); // There is not 'cat' in the initial string.;
*/
