function handleSubmit(e){
    e.preventDefault();
    console.log('submitted');
    const email = document.forms.login.email;
    const password = document.forms.login.password;

    const emailValue = email.value;
    const passwordValue = password.value;
    
    if (passwordValue < 6){
        password.style.border = '1px solid red';
        password.nextElementSibling.classList.remove('d-none');
    }

    if(emailValue == '')
    {
        email.style.border = '1px solid red';
        email.nextElementSibling.classList.remove('d-none');

    }
}