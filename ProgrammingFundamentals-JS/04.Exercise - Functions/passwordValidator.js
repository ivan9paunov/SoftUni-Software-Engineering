function passwordValidator(pass) {
    let hasValidLength = checkValidPasswordLength(pass);
    let hasValidComposition = checkPasswordComposition(pass);
    let hasMinTwoDigits = checkDigitsRequirements(pass);

    if (hasValidLength && hasValidComposition && hasMinTwoDigits) {
        console.log('Password is valid');
    }

    function checkValidPasswordLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function checkPasswordComposition(pass) {
        for (let char of pass) {
            let curCharCode = char.charCodeAt(0);

            if (
                !((curCharCode >= 48 && curCharCode <= 57) ||
                    (curCharCode >= 65 && curCharCode <= 90) ||
                    (curCharCode >= 97 && curCharCode <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }

        return true;
    }

    function checkDigitsRequirements(pass) {
        let digits = 0;

        for (let char of pass) {
            let curCharCode = char.charCodeAt(0);

            if (curCharCode >= 48 && curCharCode <= 57) {
                digits++;
            }

        }

        if (digits < 2) {
            console.log('Password must have at least 2 digits');
            return false;
        } else {
            return true;
        }
    }
}

// passwordValidator('logIn');
passwordValidator('MyPass123');