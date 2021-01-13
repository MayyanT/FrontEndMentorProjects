const submit = document.getElementById('submit');
const input = document.getElementById('input');
const message = document.getElementById('error-msg');

function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
}

submit.addEventListener('click', (e)=> {
e.preventDefault();

if(input.value == '' || !validateEmail(input.value)){
    input.classList.add('error');
    message.classList.add('error');
} else {
    input.classList.remove('error');
    input.classList.add('success');
    message.classList.remove('error');
}

});

