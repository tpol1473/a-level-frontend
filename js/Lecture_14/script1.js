localStorage.setItem('test', 'abc');

const value = 'true';

localStorage.setItem('test', value);

const content = document.querySelector('#content');

console.log();
content.innerHTML = localStorage.getItem('test');

localStorage.removeItem('test');

// setTimeout(arg1. arg2);

// setTimeout(() => {
//     console.log('Hello!')
// }, 5000);
// const myFunc = method => console.log();

// const myTimeout = setTimeout(() => {
//     console.log('Hello!');
// }, 5000);


// const myTimeout = setTimeout(() => {
//     console.log('Logged out!');
// }, 1000 * 60 * 5);
// clearTimeout(myTimeout);



console.log('test 1');
setTimeout(() => {
    console.log('setTimeout');
}, 0);

console.log('test 2');


// setInterval(() => {
//     console.log('Hello!');
// }, 1000);

const myInterval = setInterval(() => {
    console.log('Hello!');
}, 1000);

setTimeout(() => {
    clearInterval(myInterval);
}, 5000);


// export / import

const = getTimeDiff => () {

};


export default getTimeDiff;



// webpack, gulp, grunt