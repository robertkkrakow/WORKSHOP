'use strict';


function pobierzDane(eventname) {
    eventname.preventDefault();
    
    var myInput1 = document.getElementById('imie');
    var myInput2 = document.getElementById('nazwisko');
    
    console.log(myInput1.value);
    console.log(myInput2.value);
}




var nowyRozmiar = document.getElementsByTagName('h1')[0];

function zmienRozmiar(){
    document.getElementsByTagName('h1')[0].style.fontSize = '140px';
}

nowyRozmiar.onclick = zmienRozmiar;