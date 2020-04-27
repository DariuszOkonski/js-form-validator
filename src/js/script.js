const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('re-password');
const finish = document.getElementById('finish');
const btnClose = document.querySelector('.btn');

const sizes = {
    minUserName: 3,
    maxUserName: 15,
    minPassword: 6,
    maxPassword: 25
}

const pass = {
    username: false,
    email: false,
    password: false,
    rePassword: false,
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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkUsername(username) {
    pass.username = false;
    if(username.value === '') {
        validationError(username, 'Username can not be empty');
    } else if(username.value.length < sizes.minUserName) {
        validationError(username, `Username must have at least ${sizes.minUserName} characters`);
    } else if(username.value.length > sizes.maxUserName) {
        validationError(username, `Username can not have more than ${sizes.maxUserName} characters`);
    } else {
        validationSuccess(username);
        pass.username = true;
    }
}

function checkEmail(email) {
    pass.email = false;
    if(!validateEmail(email.value)) {
        validationError(email, 'Invalid Email');
    } else {
        validationSuccess(email);
        pass.email = true;
    }
}

function checkPassword(password) {
    pass.password = false;
    if(password.value === '') {
        validationError(password, 'Password can not be empty');
    } else if(password.value.length < sizes.minPassword) {
        validationError(password, `Password must have at least ${sizes.minPassword} characters`);
    } else if(password.value.length > sizes.maxPassword) {
        validationError(password, `Password can not have more than ${sizes.maxPassword} characters`);
    } else {
        validationSuccess(password)
        pass.password = true;
    }
}

function checkRePassword(password, rePassword) {
    pass.rePassword = false;
    if(rePassword.value === '') {
        validationError(rePassword, 'Re-password can not be empty');
    }else if(rePassword.value !== password.value) {
        validationError(rePassword, 'Passwords are not identical');
    } else {
        validationSuccess(rePassword);
        pass.rePassword = true;
    }
}

function clearAllClasses() {
    clearAdditionalClasses(username);
    clearAdditionalClasses(email);
    clearAdditionalClasses(password);
    clearAdditionalClasses(rePassword);

}

function clearAllInputs() {
    username.value = '';
    email.value = '';
    password.value = '';
    rePassword.value = '';
}

function areAllValid() {
    if(pass.username && pass.email && pass.password && pass.rePassword) {
       finish.style.visibility = 'visible';  
    }
}

btnClose.addEventListener('click', () => {
    clearAllClasses();
    clearAllInputs();
    finish.style.visibility = 'hidden';
});

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    checkRePassword(password, rePassword);

    areAllValid();
})