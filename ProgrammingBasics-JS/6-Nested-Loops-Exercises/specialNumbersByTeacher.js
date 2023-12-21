function specialNumbers(input) {
    let number = Number(input[0]);
    let printLine = "";

    for (let firstNum = 1; firstNum <= 9; firstNum++) {
        for (let secondNum = 1; secondNum <= 9; secondNum++) {
            for (let thirdNum = 1; thirdNum <= 9; thirdNum++) {
                for (let fourthNum = 1; fourthNum <= 9; fourthNum++) {
                    
                    let isSpecial = number % firstNum === 0 && 
                                    number % secondNum === 0 && 
                                    number % thirdNum === 0 && 
                                    number % fourthNum === 0; 
                    
                    if (isSpecial) {
                        printLine += `${firstNum}${secondNum}${thirdNum}${fourthNum} `;
                    }

                }
            }
        }
    }
    console.log(printLine);
}

specialNumbers(["3"]);