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
    //preventDefault sluzy do zablokowania przeladowywania sie strony
    event.preventDefault();
    /*zatrzymanie propaginacje na bardzej zew elemencie*/
    event.stopPropagation();
    this.style.border = '2px solid red';
    alert('klik link');
}

function changeBackground() {
    this.style.backgroundColor = 'green';
    firstLink.removeEventListener('click', highlight);
}


/*propaginacja*/
document.getElementById('sectionFirst').addEventListener('click', function(){
    alert('kliknieto sekcje');
})