var popUp = document.getElementById('popups');

var firstName = document.getElementsByName('first-name');

function stopRefresh() {
    firstName[0].value = '';
    document.getElementsByName('last-name')[0].value = '';
    document.getElementsByName('email')[0].value = '';
};

function showPopUp() {
    if (popUp) {
    popUp.classList.add('openpopup');
    };
};

function closePopUp() {
    if (popUp) {
    popUp.classList.remove("openpopup");
    };
};