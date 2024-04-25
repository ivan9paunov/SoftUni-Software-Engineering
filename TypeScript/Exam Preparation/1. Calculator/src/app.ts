function calculator(firstNum: number, operator: string, secondNum: number): void {
    let result: string = '';

    switch (operator) {
        case '+':
            result = (firstNum + secondNum).toFixed(2);
            break;
        case '-':
            result = (firstNum - secondNum).toFixed(2);
            break;
        case '*':
            result = (firstNum * secondNum).toFixed(2);
            break;
        case '/':
            result = (firstNum / secondNum).toFixed(2);
            break;
        default:
            result = 'Invalid operator!';
            break;
    }
    
    console.log(result);
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);
calculator(9, '/', 2);
calculator(7, '*', 5);