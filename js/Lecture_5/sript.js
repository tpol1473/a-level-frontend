const myStr = 'Lecture 5'; // [012345678]

console.log(myStr[8]);

const email = 'Johnny.Depp@gmail.com';
const email = 'johnny.depp@gmail.com';
if(email.toLowerCase() === email2.toLowerCase()) {
    alert('This email has been already used');
    // ...
}

/*
1. node.js =>  node js
2. open any file *.js
3. run & debug
*/

const str = 'Dog and cat';  //012 3 456 7 8910
console.log(str.includes('a'));  //с учетом регистра
console.log(str.substring(8, 11)); // cat
console.log(str.substring(0, 3)); // Dog
console.log(str.substring(8)); // cat
console.log(str.slice(8, 11)); // cat

const phrase = 'Hello! How are you?';
console.log(phrase.indexOf('o')); // 4

// startWith
const phrase = 'Strings are awesome!';
console.log(phrase.startWith('o')); // 

// slice
const text = 'I know how to ';

// split
const phrase = 'Strings are awesome!';
const arr = phrase.split(' '); // (3) ['Dog', 'and', 'cat']
const indexStart = phrase.indexOf('and');
const indexLast = indexStart + 'and'.length;
console.log(phrase.split(', '));


// replace
const str = 'JS is cool and I\'m a cool too'; 
console.log(str.replace('cool', 'not bad')); // first symbol
console.log(str.replaceAll('cool', 'not bad')); // all symbol


// trim, trimStart, trimEnd
const email = '  another@test.com   ';
console.log(email.trim());  //  'another@test.com'


// Number

const num = 255;
const num2 = new Number('10');
console.log(num.toString()); // 255  
console.log(num.toString(2)); // 1111111   
console.log(num.toString(8)); // 377
console.log(num.toString(16)); // ff

const num1 = 0x1111111;
console.log(num1.toString(10)); // 255

// tofixed, parseFloat
const num3 = 10.468;

console.log(num3.toFixed(4)); // 10.4680

const num4 = 1.2345;

console.log(num4.toFixed(3)); // 1.234

console.log((num4 * num3).toFixed(2));  // 12.92
console.log((num4 * num3).parseFloat(2));  // 12.92

//  toLocalString

const bigNumber = 100000000;
console.log(bigNumber.toLocaleString('ru')); // 100 000 000
console.log(bigNumber.toLocaleString('en-us')); // 100,000,000


// Math
//  Math.PI, Math.E
console.log(Math.PI);  // 3.14.........
console.log(Math.E);  // 2.718.........
console.log(Math.cos(x: 30));  // .........
console.log(Math.LN10);  // .........

console.log(Math.pow(3, 2));  // 9
console.log(3 ** 2);  // 9
console.log(Math.sqrt(256));  // 16

// Math.min(), Math.max()
console.log(Math.max(1, 2, 3, 4));  // 4

// Math.random()

