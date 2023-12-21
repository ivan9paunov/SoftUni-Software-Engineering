function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = "";

    for (asNumbers = firstNum; asNumbers <= secondNum; asNumbers++) {
        let numToString = asNumbers.toString();
        let oddSum = 0;
        let evenSum = 0;
        for (let asString = 0; asString < numToString.length; asString++) {
            let currentDigit = Number(numToString.charAt(asString));
            if (asString % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${asNumbers} `;
        }
    }
    console.log(printLine);
}

equalSumsEvenOddPosition(["100000", "100050"]);
