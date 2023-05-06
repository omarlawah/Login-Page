let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let span = document.querySelector('#error-msg');


function validatePass(){
    if (confirmPassword.value !== password.value){
        span.innerHTML='*Both password input fields should<br>have the same value';
        password.style.borderColor='red';
        confirmPassword.style.borderColor='red';
    }else{
        span.textContent='';
        password.style.borderColor='green';
        confirmPassword.style.borderColor='green';
    }
}

password.addEventListener('input', validatePass);
confirmPassword.addEventListener('input', validatePass);

