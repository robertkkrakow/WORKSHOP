'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);


var mojelinki = document.getElementsByClassName('superlink');
console.log(mojelinki);
console.log(mojelinki[0]);

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

var elementPoSelektorze = document.querySelector('#parFirst > a');
console.log(elementPoSelektorze);

var elementPoSelektorze = document.querySelectorAll('#parFirst > a');
console.log(elementPoSelektorze);


var tablicaZTresciaLinkow = [];

elementPoSelektorze.forEach(function(el, i){
    console.log(el.innerHTML);
    
    tablicaZTresciaLinkow.push(el.innerHTML);
 });

console.log(tablicaZTresciaLinkow);