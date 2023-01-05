// function handleSubmit(e){
//     e.preventDefault();
//     console.log('submitted');
//     const email = document.forms.login.email;
//     const password = document.forms.login.password;

//     const emailValue = email.value;
//     const passwordValue = password.value;
    
//     // validate password
//     const passwordErrorDisplay = password.nextElementSibling;
//     if (passwordValue < 6){
//         password.style.border = '1px solid red';
//         passwordErrorDisplay.classList.remove('d-none');
//         passwordErrorDisplay.innerHTML += '<li>Password must be at least 6 characters</li>';

//     }
//     if (passwordValue.includes(' '))
//     {
//         password.style.border = '1px solid red';
//         passwordErrorDisplay.classList.remove('d-none');
//         passwordErrorDisplay.innerHTML += '<li>Password cannot contain spaces</li>';
//     }

//     // if(emailValue == '')
//     // {
//     //     email.style.border = '1px solid red';
//     //     email.nextElementSibling.classList.remove('d-none');

//     // }
// }

// **************************** second step ****************************

// ctrl + . to extract function


const formData = {
    email: {
        field: document.forms.login.email,
        error: []
    },
    password:{
        field: document.forms.login.password,
        error:[]
    },
    clean: function(){
        this.email.error = [];
        this.password.error = [];
    }
}
 
function handleSubmit(e){
    e.preventDefault();


    // validate email
    validate();
    
    
}

function displayError() {
    if (formData.email.error.length > 0) {
        let nextElement = formData.email.field.nextElementSibling;
        nextElement.classList.remove('d-none');
        nextElement.innerHTML = formData.email.error.join('<br>');

    }
    // display password error
    if (formData.password.error.length > 0) {
        let nextElement = formData.password.field.nextElementSibling;
        nextElement.classList.remove('d-none');
        nextElement.innerHTML = formData.password.error.join('<br>');

    }
}

function validate() {
    formData.clean();
    if (formData.email.field.value === '') {
        formData.email.error.push('Enter Email.');
    }
    if (!formData.email.field.value.includes('@')) {
        formData.email.error.push('Enter valid email.');
    }

    // validate password
    if (formData.password.field.value === '') {
        formData.password.error.push('Enter password.');
    }
    if (formData.password.field.value < 6) {
        formData.password.error.push('Enter at least 6 characters.');
    }

    // display email error
    displayError();
}

// Auto validation.

document.querySelectorAll('#login input').forEach(element => {
    element.addEventListener('keyup', ()=>{
        validate();
    })});
