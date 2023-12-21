function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let isFloat = false;

    if (sum % 1 != 0) {
        isFloat = true;
    }

    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}

integerAndFloat(9, 100, 1.1);
// integerAndFloat(100, 200, 303);