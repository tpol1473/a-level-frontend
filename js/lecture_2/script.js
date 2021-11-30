function hideElement(){
    const testParagraf = document.getElementById("logo");
    testParagraf.style.display = "none"; 
}


function showElement(){
    const testParagraf = document.getElementById("logo");
    testParagraf.style.display = "block"; 
}

const btnHide = document.getElementById("btn-hide");
const btnShow = document.getElementById("btn-show");

btnHide.addEventListener("click", hideElement);
btnShow.addEventListener("click", showElement);