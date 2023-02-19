let popUp = document.getElementById('popup');
let retry = document.getElementById('retry-popup')

let firstName = document.getElementsByName('first-name');
let lastName = document.getElementsByName('last-name');
let email = document.getElementsByName('email');

function stopRefresh() {
    firstName[0].value = null;
    lastName[0].value = null;
    email[0].value = null;
};

function showPopUp() {
    if (firstName[0].value && lastName[0].value && email[0].value) {
    popUp.classList.add('openpopup');
    } else{
        retry.classList.add('openpopup');
    };
};

function closePopUp() {
    if (popUp) {
    popUp.classList.remove("openpopup");
    };
    
};

function closeRetry() {
    if (retry) {
        retry.classList.remove("openpopup");
    };
}