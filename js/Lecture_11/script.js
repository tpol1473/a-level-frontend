const nav = document.querySelector('.content>ul');

const boxes = document.getElementsByClassName('box');

function filterBoxes(targetValue) {
    let currentBox;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('visible');

        if (boxes[i].dataset.type === targetValue) {
            currentBox = boxes[i];  
        }
    }

    return currentBox;
};


function clickElement(el) {
    const targetClassName = el.target.classList[0]; 

    const currentBox = filterBoxes(targetClassName);

    if (currentBox) {
        currentBox.classList.add('visible');
    }
};

nav.addEventListener('click', clickElement);
