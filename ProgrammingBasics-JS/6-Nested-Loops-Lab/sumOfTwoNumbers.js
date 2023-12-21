function sumOfTwoNumbers(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinations = 0;
    let whichCombination = 0;
    let isFound = false;

    for (let firstLine = firstNum; firstLine <= secondNum; firstLine++) {
        for (let secondLine = firstNum; secondLine <= secondNum; secondLine++) {
            combinations ++;
            if (firstLine + secondLine === magicNum) {
                whichCombination = combinations;
                console.log(`Combination N:${whichCombination} (${firstLine} + ${secondLine} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["1","10","5"]);
// sumOfTwoNumbers(["88","888","1000"]);
// sumOfTwoNumbers(["23","24","20"]);
// sumOfTwoNumbers(["88", "888", "2000"]);

