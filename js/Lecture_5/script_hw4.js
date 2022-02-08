/**
 * Task 3
 */

function searchSubstringAmount(initialString, searchingSubstring) {
  // use string or from arguments or from user's prompt
  // let initialString = prompt('Enter your search data:');
  // let searchingSubstring = prompt('Enter the desired value:');
  let value = 0;

  value = initialString.split(searchingSubstring).length - 1;

  if (value === 0) {
    console.log(`There is not "${searchingSubstring}" in the initial string.`);
  } else {
    console.log(value);
  }
}

/**
 * Example
 * const initialString = 'Hello world';
 * searchSubstringAmount (initialString, 'world'); // 1
 * searchSubstringAmount (initialString, 'o'); // 2
 * searchSubstringAmount (initialString, 'l'); // 3
 * searchSubstringAmount (initialString, 'cat'); // There is not 'cat' in the initial string.;
 */
