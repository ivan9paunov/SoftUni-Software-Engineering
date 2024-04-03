"use strict";
function mathOperations(a, b, operand) {
    switch (operand) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        case '%':
            console.log(a % b);
            break;
        case '**':
            console.log(a ** b);
            break;
        default:
            break;
    }
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
