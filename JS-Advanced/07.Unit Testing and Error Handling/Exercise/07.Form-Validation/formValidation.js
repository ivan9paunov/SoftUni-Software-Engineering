function validate() {
    // regex patterns
    const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    const passwordPattern = /^\w{5,15}$/;

    // input fields
    const formRef = document.getElementById('registerForm');
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const isCompanyCheck = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const validAlert = document.getElementById('valid');
    
    isCompanyCheck.addEventListener('change', checkBox);
    formRef.addEventListener('submit', submitInfo);

    function checkBox() {
        if (isCompanyCheck.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function submitInfo(event) {
        event.preventDefault();

        let username = usernameField.value;
        const isValidUsername = validatingUsername(username);
        
        let email = emailField.value;
        const isValidEmail = validatingEmail(email);

        let password = passwordField.value;
        const isValidPassword = validatingPassword(password);

        let confirmPassword = confirmPasswordField.value;
        const isValidConfirmPass = validatingConfirmPassword(confirmPassword);

        let isValidCompany = true;
        if (isCompanyCheck.checked) {
            let companyID = companyNumber.value;
            isValidCompany = validatingCompany(companyID);
        }

        if (isValidUsername && isValidEmail && isValidPassword && isValidConfirmPass && isValidCompany) {
            validAlert.style.display = 'block';
        } else {
            validAlert.style.display = 'none';
        }
    }

    function validatingUsername(username) {
        let isValid = false;

        if (usernamePattern.test(username)) {
            usernameField.style.border = 'none';
            isValid = true;
        } else {
            usernameField.style.border = '';
            usernameField.style.borderColor = 'red';
        }

        return isValid;
    }

    function validatingEmail(email) {
        let isValid = false;

        if (emailPattern.test(email)) {
            emailField.style.border = 'none';
            isValid = true;
        } else {
            emailField.style.border = '';
            emailField.style.borderColor = 'red';
        }

        return isValid;
    }

    function validatingPassword(password) {
        let isValid = false;

        if (passwordPattern.test(password)) {
            passwordField.style.border = 'none';
            isValid = true;
        } else {
            passwordField.style.border = '';
            passwordField.style.borderColor = 'red';
        }

        return isValid;
    }

    function validatingConfirmPassword(confirmPassword) {
        let isValid = false;

        if (passwordPattern.test(confirmPassword) && passwordField.value == confirmPasswordField.value) {
            confirmPasswordField.style.border = 'none';
            isValid = true;
        } else {
            confirmPasswordField.style.border = '';
            passwordField.style.border = '';
            confirmPasswordField.style.borderColor = 'red';
            passwordField.style.borderColor = 'red';
        }

        return isValid;
    }

    function validatingCompany(companyID) {
        let isValid = false;
        companyID = Number(companyID);

        if (companyID >= 1000 && companyID <= 9999) {
            companyNumber.style.border = 'none';
            isValid = true;
        } else {
            companyNumber.style.border = '';
            companyNumber.style.borderColor = 'red';
        }

        return isValid;
    }
}
