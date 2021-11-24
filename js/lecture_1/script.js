// function changeColor(){
//     const testParagraf = document.getElementById("test-id");
//     testParagraf.style.color = "red"; 
// }

// const myButton = document.getElementById("button");
// myButton.addEventListener("click", changeColor);

// function changeColor(){
//         const testParagraf = document.getElementById("test-id");
//         testParagraf.style.color = color; 
//     }
    
//     const myButton = document.getElementById("button");
//     myButton.addEventListener("click", () => changeColor ("red"));
//     myButton.addEventListener("mouselive", () => changeColor ("blue"));

function displaynone(){
    const testParagraf = document.getElementById("test-id");
    testParagraf.style.display = "none"; 
}

const myBtn = document.getElementById("btn");
myBtn.addEventListener("click", displaynone);


const testParagraf = document.getElementById("test-id")

function hideElement(){
    testParagraf.style.display = "none"; 
}

function showElement(){
    testParagraf.style.display = "block"; 
}

const btnHide = document.getElementById("btn-hide");
const btnShow = document.getElementById("btn-show");

btnHide.addEventListener("click", hideElement);
btnShow.addEventListener("click", showElement);


for (let i = 0; i == 10000; i++) {
    console.log("test");
}

if