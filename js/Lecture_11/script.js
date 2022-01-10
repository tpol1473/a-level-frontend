function clickElement(el){
    el.style.display = "flex"; 
}

const homeParagraf = document.getElementsByClassName("home");
const newsParagraf = document.getElementsByClassName("news");
const videosParagraf = document.getElementsByClassName("videos");
const picturesParagraf = document.getElementsByClassName("pictures");
const aboutParagraf = document.getElementsByClassName("about");
const contactParagraf = document.getElementsByClassName("contact");

function clickElement(homeParagraf);
function clickElement(newsParagraf);
function clickElement(videosParagraf);
function clickElement(picturesParagraf);
function clickElement(aboutParagraf);
function clickElement(contactParagraf);

homeParagraf.addEventListener('click', clickElement);
newsParagraf.addEventListener('click', clickElement);
videosParagraf.addEventListener('click', clickElement);
picturesParagraf.addEventListener('click', clickElement);
aboutParagraf.addEventListener('click', clickElement);
contactParagraf.addEventListener('click', clickElement);
