const str = 'Javascript string';
const str2 = new String('Javascript string');

console.log(str === str2);  // false
console.log(typeof str);   // string
console.log(typeof str2);  // object

console.log(str.length);  // 17

// 'Test string'.length  ===  String('Test string').length
// 'Test string'  !==  String('Test string')

//  str !== str2

///////////////////////////////////////////////////

let str3 = 'Javascript';
/*
str3[0] - 'J'
str3[1] - 'a'
str3[2] - 'v'
str3[3] - 'a'
str3[4] - 's'
str3[5] - 'c'
str3[6] - 'r'
str3[7] - 'i'
str3[8] - 'p'
str3[9] - 't'
*/

alert(str3[4]); // 's'

str3[9] = 'p';  // => 'Javascripp'

//////////////////////////////////////////

// ASCI

// 97 = a ....

const sentence = 'kdfjvngsk dkfvls sdkvjsd.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
//  Output:  'The character code 118 is equal to v'


//////////////////////////////////////////

const firstName = 'Johnny';
const lastName = 'Depp';

console.log(firstName.toLowerCase()); // johny
console.log(lastName.toUpperCase()); // DEPP

//////////////////////////////////////////////


const userName = 'admin';
const userPrompt = prompt('Please enter your username');

if (userPrompt === userName) {
    alert('Correct');
} else {
    alert('Incorrect');
}


////////////////////////////////////////////

// toLowerCase  (toUpperCase)

const userName1 = 'admin';
const userPrompt1 = prompt('Please enter your username 1');

if (userPrompt1.toLowerCase === userName1.toLowerCase) {
    alert('Correct');
} else {
    alert('Incorrect');
}

///////////////////////////////////////////

// includes

const phrase = 'Hello! How are you?';

console.log(phrase.includes('Hello'));  // true
console.log(phrase.includes('are'));  // true

console.log(phrase.includes('hello'));  // false
console.log(phrase.includes('cat'));  // false

///////////////////////////////////////////

const userName2 = 'admin';
const userPrompt2 = prompt('Please enter your incledes');

if (userName2.includes(userPrompt2.toLowerCase())) {
    alert('Correct');
} else {
    alert('Incorrect');
}

///////////////////////////////////////////////

// indexOf, lastIndexOf

const userName3 = 'admin';
const userPrompt3 = prompt('Угадай букву');

console.log(userName3.indexOf(userPrompt3));

if (userName3.indexOf(userPrompt3.toLowerCase()) !== -1) {
    alert('Correct');
} else {
    alert('Incorrect');
}

///////////////////////////////////////////////

// startsWith  endsWith

const phrase1 = 'Strings are awesome!';

console.log(phrase1.startsWith('S')); // true
console.log(phrase1.startsWith('Str')); // true
console.log(phrase1.startsWith('Strings are')); // true

console.log(phrase1.startsWith('are')); // false

// endsWith
const phrase2 = 'Strings are awesome!';

console.log(phrase2.endsWith('awesome!')); // true
console.log(phrase2.endsWith('are awesome!')); // true

console.log(phrase2.endsWith('awesome')); // false


//////////////////////////////////////////////////

// substring, 

const message = 'Hello! How are you?';

console.log(message.substring(0, 5));  // Hello

// slice

const text = 'I know how to work with strings';
const spoiler = text.slice(0, 7) + '...' + text.slice(-8);

console.log(spoiler);  // I know ... strings

/////////////////////////////////////////////////

// split

const message1 = 'Hello! How are you?';
const arr = message1.split(' ');

console.log(arr);  // [ "Hello!", "How", "are", "you?" ]

console.log(message1.split('e')); //  [ "H", "llo! How ar", " you?" ]


/////////////////////////////////////////

// replace, replaceAll

const str4 = 'I like apples 1 and apple juice';

const once = str4.replace('apple', 'orange');
const all = str4.replaceAll('apple', 'orange');

console.log(once);  //  I like oranges and apple juice
console.log(all);   //  I like oranges and orange juice


////////////////////////////////////////////

// regex, regex101.com

// (.+)(@.+)(..+)   ->  

// 0-14	test@gmail.com
// 0-4	test
// 4-12	@gmail.c
// 12-14	om


/////////////////////////////////////////////

// trim, trimStart, trimEnd

const email = '   another@test.com  ';

console.log(email.trim());  //  'another@test.com'

/////////////////////////////////////////////


// number


const a = 5;

const pi = 3.14;

// const hex = fff;  // 255

Math.random(); // 

const num = 10;
const num2 = new Number('10');

console.log(num === num2);  // false
console.log(typeof num);   // number
console.log(typeof num2);  // object

const biggestSaveNum = Number.MAX_SAFE_INTEGER; // 2**53 -1  9007199254740991
const smallestSaveNum = Number.MIN_SAFE_INTEGER; //-(2**53 -1)  -9007199254740991
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

console.log(biggestSaveNum);  // 2**53 -1  9007199254740991
console.log(smallestSaveNum);  //-(2**53 -1)  -9007199254740991
console.log(infiniteNum);  // Infinity
console.log(negInfiniteNum);  // -Infinity
console.log(notANum);   //  NaN

// isNan

const nanResult = 5 * undefined;
console.log(nanResult == NaN);  // false

console.log(nanResult === NaN);  // false

console.log(Number.isNaN(nanResult));  // true

//////////////////////////////////////////////////////

const messages = '36.6 temerature';

const array = messages.split(' ');

const arrNumbers = array.filter((element) => !Number.isNaN(+element));
const arrNotNumbers = array.filter((element) => Number.isNaN(+element));

console.log(arrNumbers);   // Array [ "36.6" ]
console.log(arrNotNumbers);   // Array [ "temerature" ]

///////////////////////////////////////////////////////

// isFinite

const number1 = 4;
const nan = NaN;
const inf = Infinity;
const string1 = 'hello';

console.log(Number.isFinite(number1));  //  true
console.log(Number.isFinite(nan));      // false
console.log(Number.isFinite(inf));      // false
console.log(Number.isFinite(string1));  // false


// toString

const num3 = 7;

console.log(num3.toString());  // '7'
console.log(num3.toString(2));  // '111' in binary system


const numb = 10;
console.log(numb.toString(2));  //  1010

const numb1 = 255;
console.log(numb1.toString(16));  //  ff
console.log(numb1.toString(2));   //  11111111

////////////////////////////////////////////

// toFixed

const numb2 = 10.468;

console.log(numb2.toFixed(4));  // '10.4680'
console.log(numb2.toFixed(3));  // '10.468'
console.log(numb2.toFixed(2));  // '10.47'
console.log(numb2.toFixed(1));  // '10.5'
console.log(numb2.toFixed(0));  // '10'

// parseFloat

const messages0 = '36.6 temerature';

const array0 = messages0.split(' ');

const arrNumbers0 = array.filter((element) => !Number.isNaN(Number.parseFloat(element)));

console.log(arrNumbers0);   // Array [ "36.6" ]


// toLocaleString

const price = 1000000;

alert(`Wow! You won ${price.toLocaleString('en')}`);
alert(`Wow! You won ${price.toLocaleString('uk', {style: 'currency', currency: 'UAH'})}`);
alert(`Wow! You won ${price.toLocaleString('en', {style: 'currency', currency: 'UAH'})}`);

const bigNumber = 100000000;
console.log(bigNumber.toLocaleString('es', {style: 'currency', currency: 'USA'}));
//  100.000.000,00 USA

console.log(bigNumber.toLocaleString('uk', {style: 'currency', currency: 'UAH', minimumFractionDigits: 0}));
//  100 000 000 ₴



/////////////////////////////////////////////////////////////

//  Math.round, Math.floor

const number2 = 4.5;
const number3 = 9.99;

console.log(Math.round(number2));  //  5
console.log(Math.round(number3));  //  10

console.log(Math.floor(number2));  //  4
console.log(Math.floor(number3));  //  9


//  Math.pow(), Math.sqrt()

console.log(Math.pow(4, 2)); // 16
console.log(4**2); // 16


console.log(Math.sqrt(256)); // 16

console.log(Math.max(1, 9, 3, 7, 4, 2)); // 9
console.log(Math.min(1, 9, 3, 7, 4, 2)); // 1


//  Math.random()   {0 --- 1}

console.log(Math.random()); // 0.6650753053534767
console.log(Math.random()); // 0.7348268379293362

const value = (Math.random()*100).toFixed();
console.log(value);
