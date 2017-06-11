'use strict';

var paragraf = document.getElementById('parFirst');

/*Rodzice*/
console.log(paragraf);
console.log(paragraf.parentNode);
console.log(paragraf.parentElement);

/*Dzieci*/
console.log(paragraf.childNodes);
//ten wykorzystujemy czesciej
console.log(paragraf.children);
console.log(paragraf.firstChild);
console.log(paragraf.firstElementChild);
console.log(paragraf.lestElementChild);

/*Rodzenstwo*/

console.log(paragraf.nextSibling);
console.log(paragraf.previousSibling);
console.log(paragraf.nextElementSibling);
console.log(paragraf.previousElementSibling);

paragraf.childNodes.forEach(function(element, i) {
   if(element.nodeType === 8) {
       console.log('komentarz');
       
       element.parentNode.removeChild(element);
   } 
});