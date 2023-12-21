function oddAndEvenSum(num) {
    let numToString = String(num);

    let [oddSum, evenSum] = calcEvenOddSums(numToString);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function calcEvenOddSums(str) {
    let oddSum = 0;
    let evenSum = 0;
    
    for (let char of str) {
        let digit = Number(char);

        if (char % 2 != 0) {
            oddSum += digit;
        } else {
            evenSum += digit;
        }
    }
    
    return [oddSum, evenSum];
    }
}

oddAndEvenSum(1000435);