const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');
const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click',function(){

    const email = emailField.value;
    // console.log(typeof email)
    const password = passwordField.value;
    // console.log(typeof password)

    if(email === 'ph@gmail.com' && password === '12345'){
        // console.log('you are welcome')
        location.href  = 'https://mirjakariya.github.io/rescue-military-app/home.html'
    }
    else{
        // console.log('your access is denied')
        alert('your access is denied')
    }
})