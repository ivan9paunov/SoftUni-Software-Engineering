function simpleCalculator(firstNum, secondNum, operator) {
    let add = (firstNum, secondNum) => firstNum + secondNum;
    let subtract = (firstNum, secondNum) => firstNum - secondNum;
    let multiply = (firstNum, secondNum) => firstNum * secondNum;
    let divide = (firstNum, secondNum) => firstNum / secondNum;

    let result;

    switch(operator) {
        case 'add':
            result = add(firstNum, secondNum);
            break; 
        case 'subtract':
            result = subtract(firstNum, secondNum);
            break;
        case 'multiply':
            result = multiply(firstNum, secondNum);
            break;
        case 'divide':
            result = divide(firstNum, secondNum);
            break;
    }

    console.log(result);
}

simpleCalculator(5, 5, 'multiply');