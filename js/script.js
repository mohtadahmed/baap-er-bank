document.getElementById('login-button').addEventListener('click', function(){
    //  Get the user email address from the Email input field
    const emailField = document.getElementById('user-email');
    const userEmail =  emailField.value;
    

    // Get the password from the Password input field

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    

    // Check if the user is valid or not
    if(userEmail === 'myacc@baap.com' && userPassword === 'secrect'){
        console.log('Valid User');
    }
    else{
        console.log('Invalid User');
    }
})