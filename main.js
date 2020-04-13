'use strict';
const button = document.querySelector('.slider');
const body = document.querySelector('body');

const changeMode = () =>{
    body.classList.toggle('dark')
}

button.addEventListener('click', changeMode)