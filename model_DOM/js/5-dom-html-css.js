'use strict';

var mainHeader = document.getElementById('main-header');

console.log(mainHeader.innerHTML);

mainHeader.innerHTML = 'Nowy <span>nagłówek</span>';

/*mainHeader.outerHTML = '<h3>Mały ngłówek</h3>'*/


var link = document.getElementsByClassName('link')[0];
console.log(link);

link.href = 'htt://wp.pl';


console.log(link.className);

//zamiana obecnych klas na dwie nowe
link.className = 'pierwsza-klasa druga-klasa';
//dodanie kolejnej klasy do 2 istniejacych
link.className += ' trzecia klasa';


//dodanie klasy na wszystkich linkach na stronie
var allLinks = document.getElementsByTagName('a');

for(var i =0; i<allLinks.length; i++){
    allLinks[i].className += ' zupelnie-nowa-klasa';
}


/*
allLinks.forEach(function(elm, i){
   elm.className += 'zupelnie-nowa-klasa';
});
*/



console.log(allLinks);



mainHeader.style.color = '#ff0000';
mainHeader.style.backgroundColor = '#bc0102';


var newStyle = document.createElement('link');
var newAtribute = document.createAttribute('href');
var newRel = document.createAttribute('rel');

newAtribute.value = 'http://';
newRel.value = 'stylesheet';

newStyle.setAttributeNode(newAtribute);
newStyle.setAttributeNode(newRel);


document.head.appendChild(newStyle);
