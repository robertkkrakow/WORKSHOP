'use strict';

//dodawanie nowych wezlow

var istniejacyWezel = document.getElementById('parSecond').children[0];
console.log(istniejacyWezel);

var nowyHeader = document.createElement('h2');
var nowyText = document.createTextNode('nowy naglowek z js');

nowyHeader.appendChild(nowyText);

console.log(nowyHeader.nodeType);



istniejacyWezel.parentElement.insertBefore(nowyHeader, istniejacyWezel);