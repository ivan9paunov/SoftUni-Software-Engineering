function numbers(input) {
    let number = Number(input[0]);
    let numberToString = number.toString();
    let firstNum = Number(numberToString[0]);
    let secondNum = Number(numberToString[1]);
    let thirdNum = Number(numberToString[2]);
    let rows = firstNum + secondNum;
    let cols = firstNum + thirdNum;
    
    for (let rowNumbers = 1; rowNumbers <= rows; rowNumbers++) {
        let printLine = "";
        for (let colNumbers = 1; colNumbers <= cols; colNumbers++) {
            if (number % 5 === 0){
                number -= firstNum;
                printLine += `${number} `;
            } else if (number % 3 === 0) {
                number -= secondNum;
                printLine += `${number} `;
            } else {
                number += thirdNum;
                printLine += `${number} `;
            }
        }
        console.log(printLine);
    }
}

numbers(["376"]);