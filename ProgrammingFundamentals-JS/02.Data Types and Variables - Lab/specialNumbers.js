function specialNumbers(num) {
    for (let count = 1; count <= num; count++) {
        let numToString = String(count);
        let sumOfDigits = 0;
        
        for (let digit = 0; digit < numToString.length; digit++) {
            let currentDigit = Number(numToString[digit]);
            sumOfDigits += currentDigit;
        }
        
        if (sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11) {
            console.log(`${count} -> True`);
        } else {
            console.log(`${count} -> False`);
        }
    }
}

// specialNumbers(15);
specialNumbers(20);