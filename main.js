'use strict';
const button = document.querySelector('.slider');
const body = document.querySelector('body');
const text = document.querySelector('.header__subtitle')
const sun = document.querySelector('.sun')
const flexo = document.querySelector('.flexo')

const changeMode = () =>{
    body.classList.toggle('dark')
    changeElements()
}
const changeElements =()=>{
    if(body.classList.contains('dark')){
        text.innerHTML='Reality'
        text.classList.remove('yellow')
        text.classList.add('orange')
        sun.classList.add('disappear')
        flexo.classList.remove('disappear')
    }else{
        text.innerHTML='Expectations'
        text.classList.add('yellow')
        flexo.classList.add('disappear')
        sun.classList.remove('disappear')
    }
}

button.addEventListener('click', changeMode)

