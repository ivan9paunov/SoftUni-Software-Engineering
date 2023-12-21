function specialNumbers(input) {
    let number = Number(input[0]);
    let printLine = "";
    let notMatch = false;
    
    for (let check = 1111; check <= 9999; check++) {
        let numAsString = check.toString();
        let magicNum = "";
        for (let asString = 0; asString < numAsString.length; asString++) {
            let currentDigit = Number(numAsString.charAt(asString));
            if (number % currentDigit === 0) {
                currentDigit = currentDigit.toString();
                magicNum += `${currentDigit}`;
                continue;
            } else {
                notMatch = true;
                break;
            }
        }
        if(!notMatch) {
            printLine += `${magicNum} `;
            notMatch = false;
        } else {
            notMatch = false;
        }
    }
    console.log(printLine);
}

specialNumbers(["3"]);
// specialNumbers(["16"]);