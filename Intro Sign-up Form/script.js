
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

function showError(input){
    let formControl = input.parentElement;
    formControl.classList.add('error');
}

function showSuccess(input){
    let formControl = input.parentElement;
    formControl.classList.add('success');
    formControl.classList.remove('error');
}

function validateEmail(email) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(email.value)){
        showSuccess(email);
    } else {
        showError(email);
    }
}

function checkInputs(inputArr){
    inputArr.forEach(function(input) {
        if(input.value === ''){
            showError(input);
        } else {
            showSuccess(input);
        }
    });
}

submit.addEventListener('click', (e) => {
    e.preventDefault();

    checkInputs([firstName, lastName, password]);
    validateEmail(email);
})