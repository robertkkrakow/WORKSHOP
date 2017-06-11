'use strict';

//dodawanie nowych wezlow

var istniejacyWezel = document.getElementById('parSecond').children[0];
console.log(istniejacyWezel);

var nowyHeader = document.createElement('h2');
var nowyText = document.createTextNode('nowy naglowek z js');
var attribute = document.createAttribute('id');

nowyHeader.setAttributeNode(attribute);
nowyHeader.id = 'nowe-id';


nowyHeader.appendChild(nowyText);

console.log(nowyHeader.nodeType);



istniejacyWezel.parentElement.insertBefore(nowyHeader, istniejacyWezel);


istniejacyWezel.parentElement.removeChild(istniejacyWezel);