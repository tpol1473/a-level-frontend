import getTimeDiff from './script1.js';



let todayDate = new Date();

console.log(todayDate);

// let currentDate = new Date('April 20, 2020 11:15:03');

// let currentDate = new Date(1977, 8, 15);
// console.log(currentDate);

let currentDate = new Date(1980, 2, 18);
console.log(currentDate);


console.log(currentDate.getFullYear);
console.log(currentDate.getMonth);
console.log(currentDate.getDate);  // day of month
console.log(currentDate.getDay);  // day of week
console.log(currentDate.getTime);

// set
todayDate.setFullYear(2021);
todayDate.setMonth(4);
console.log(todayDate);

const expireDate = new Date(2022, 1, 1);

const currentDate = new Date();

console.log('expireDate: ', expireDate);
console.log('currentDate: ', currentDate);

const diffMilliseconds = expireDate.getTime() - currentDate.getTime();

let nowTime = diffMilliseconds/ 1000 / 60 / 60;
// nowTime % diffSeconds === 0;
console.log('days left: ', (nowTime / 24).toFixed());


if(diffMilliseconds <= 0) {
    console.log('Sale is over');
} else {
    console.log('Sale is running');
    const diffDate = new Date().setTime(diffMilliseconds);

}

// moment.js


// import / export

