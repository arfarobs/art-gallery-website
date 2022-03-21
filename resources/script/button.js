const button = document.querySelector('button');
const arrow = document.getElementsByClassName('arrow-container')[0];
const form = document.querySelector('form');

const changeColor = () => {
    button.style.background = '#D5966C';
    arrow.style.background = '#151515';
}

const changeColorBack = () => {
    button.style.background = '#151515';
    arrow.style.background = '#D5966C';
}

form.addEventListener('mouseover', changeColor);
button.addEventListener('focus', changeColor);
form.addEventListener('mouseout', changeColorBack);
button.addEventListener('blur', changeColorBack);