'use strict';
const button = document.querySelector('.slider');
const body = document.querySelector('body');
const summerText = document.querySelector('.header__subtitle')
const winterText = document.querySelector('.header__subtitle2')
const sun = document.querySelector('.sun')
const flexo = document.querySelector('.flexo')

const changeMode = () =>{
    body.classList.toggle('dark')
    summerText.classList.toggle('hidden')
    changeElements()
}
const changeElements =()=>{
    if(body.classList.contains('dark')){
        winterText.classList.remove('hidden')
        sun.classList.add('disappear')
        flexo.classList.remove('disappear')
    }else{
        winterText.classList.add('hidden')
       flexo.classList.add('disappear')
       sun.classList.remove('disappear')
    }
}

button.addEventListener('click', changeMode)

