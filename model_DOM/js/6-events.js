'use strict';

function alertFunction(par) {
    /*    var par = document.getElementById('parFirst').firstElementChild;*/
    par.style.backgroundColor = 'pink';
}


var mainHeader = document.getElementById('main-header');



/*
function changeBackground() {
    this.style.backgroundColor = 'green';
}*/

mainHeader.onclick = changeBackground;



var firstLink = document.getElementsByClassName('inna-klasa')[0];

firstLink.addEventListener('click', highlight);

function highlight(event){
    event.preventDefault();
    this.style.border = '2px solid red';
}

function changeBackground() {
    this.style.backgroundColor = 'green';
    firstLink.removeEventListener('click', highlight);
}