const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('re-password');

const sizes = {
    minUserName: 3,
    maxUserName: 15,
    minPassword: 6,
    maxPassword: 25
}


function validationSuccess(input) {
    input.parentNode.classList.remove('error');
    input.parentNode.classList.add('success');
}

function validationError(input, message) {
    input.parentNode.classList.remove('success');
    input.parentNode.classList.add("error");
    input.nextElementSibling.innerText = message;
}

function clearAdditionalClasses(input) {
    input.parentNode.classList.remove('success');
    input.parentNode.classList.remove('error');
}

function checkUsername(username) {
    if(username.value === '') {
        validationError(username, 'Username can not be empty');
    } else if(username.value.length < sizes.minUserName) {
        validationError(username, `Username must have at least ${sizes.minUserName} characters`);
    } else if(username.value.length > sizes.maxUserName) {
        validationError(username, `Username can not have more than ${sizes.maxUserName} characters`);
    } else {
        validationSuccess(username)
    }
}


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    checkUsername(username);
    
})