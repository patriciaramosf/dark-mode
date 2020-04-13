'use strict';
const button = document.querySelector('.slider');
const body = document.querySelector('body');
const summerText = document.querySelector('.header__subtitle')
const winterText = document.querySelector('.header__subtitle2')

const changeMode = () =>{
    body.classList.toggle('dark')
    summerText.classList.toggle('hidden')
    if(body.classList.contains('dark')){
        winterText.classList.remove('hidden')
    }else{
        winterText.classList.add('hidden')
    }
}

button.addEventListener('click', changeMode)