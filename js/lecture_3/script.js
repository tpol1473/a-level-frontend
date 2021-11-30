// const myString = "I'm a cat";

// const myString2 = "I\'m a cat";

// const animal = 'cat';

// const tamplateString = `I'm a ${animal}. May.`;  //I'm a cat. May.

// const nonTamplateString = `I'm a` + animal + '. May.'  //I'm a cat. May.

// My name is...., I'm learning JS!

// const myName = 'Tatiana';
// const str1 = `My name is ${myName}, I'm learning JS!`;  
// const str2 = `My name is ` + myName +", I'm learning JS!";  
// const str3 = 'My name is ' + myName +", I'm learning JS!"; 
// console.log(`My name is ${myName}, I'm learning JS!`);
// console.log(`My name is ` + myName +", I'm learning JS!");
// console.log('My name is ' + myName +", I'm learning JS!");

// const number1 = 5;
// const number2 = 10.5;
// const number3 = -3;

// Number.isSafeInteger = 2*53;

// alert(1/0); //Infinity
// alert(-1/0); //-Infinity

// alert("some string"/1); //NaN

// const bigInt = 248738648236482648265862n;

// const isEverythingClear = true;
// const isBooleanHard = false;
// const isGreater = 3 > 1;
// 4 >1 //true
// 4 == 5 //false
// 4 == "4" //true
// 4 === "4" //false

// let a;
// console.log(a); // undefined
// console.log(b);


// const person = (
//     name: "Joe",
//     age = 20,
//     isStudent = "Y"
// )

// const catName = "Grey";
// const catAge = 3;
// const isCatMale = true;

// function catSay() {
//     alert('Meowwww');
// }

// console.log("Cat name is ${catName}, it's ${catAge}");

// const cat = {
//     name: 'Grey',
//     age: 3,
//     isMale: true,
//     say: function(){
//         alert('Meowwww');
//     }
// };

// console.log(`Cat name is ${cat.say()}`)

const user = {
    name: 'Tatiana',
    age: 18,
    isMale: false,
    say: function(){
        alert('Hallo!');
    }
};
// typeof cat;
// typeof cat.age;


console.log(`My name is ${user.say()}`)

const Sym1 = Symbol("Sym")
const Sym2 = Symbol("Sym")

//console.log(return Sym1 == Sym2); // false