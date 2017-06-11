'use strict';

/*pierwsze podejscie*/
/*var allAgrements = document.getElementById('wszystkie-zgody');

allAgrements.onchange = function () {

    document.getElementById('zgoda-marketingowa-1').checked = this.checked;
    document.getElementById('zgoda-marketingowa-2').checked = this.checked;
    document.getElementById('zgoda-marketingowa-1').disabled = this.checked;
    document.getElementById('zgoda-marketingowa-2').disabled = this.checked;
}*/


/*drugie podejscie*/
var allAgrements = document.getElementById('wszystkie-zgody');
var allChceckboxes = document.querySelectorAll('input[type=checkbox]');



function checkboxState(state) {
    for (var i = 0; i < allChceckboxes.length - 1; i++) {
        allChceckboxes[i].checked = state;
        allChceckboxes[i].disabled = state;
    }
}


allAgrements.onchange = function () {
    checkboxState(this.checked);
}

/*s[rawdzanie czy pola sa wypenione*/
document.getElementById('wyslij').addEventListener('click', validateForm);

function validateForm(event) {

    var textInputs = document.querySelectorAll('input[type=text]');

    for (var i = 0; i < textInputs.length; i++) {
        if (textInputs[i].value == '') {
            event.preventDefault();
            
            if(textInputs[i].nextElementSibling.tagName == 'P'){
                continue;
            }
            
            createAlert(textInputs[i], i);
        } else if (textInputs[i].nextElementSibling.tagName == 'P'){
            document.getElementById('alert' + i).remove();
        }

    }

}

function createAlert(element, id){
    var message = document.createElement('p');
    message.id = 'alert-' + id;
    message.innerHTML = 'To pole jest wymagane';
    element.parentNode.insertBefore(message, element.nextSibling);
}