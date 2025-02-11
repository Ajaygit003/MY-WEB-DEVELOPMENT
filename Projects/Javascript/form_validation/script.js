function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let name_error = document.getElementById('name-error');
    let email_error = document.getElementById('email-error');
    let password_error = document.getElementById('password-error');

    let nameRegex = /^[A-Za-z\s]+$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Name Validation
    if (!name.match(nameRegex)) {
        name_error.innerHTML = "Name is required and should only contain letters and spaces!";
        return false;
    } else {
        name_error.innerHTML = "";
    }

    // Email Validation
    if (!email.match(emailRegex)) {
        email_error.innerHTML = "Please enter a valid email!";
        return false;
    } else {
        email_error.innerHTML = "";
    }

    // Password Validation
    if (!password.match(passwordRegex)) {
        password_error.innerHTML = "Password must be at least 8 characters long, with at least one lowercase letter, one uppercase letter, one number, and one special character!";
        return false; 
    } else {
        password_error.innerHTML = "";
    }
}

document.getElementById('myForm').addEventListener('submit', validateForm);