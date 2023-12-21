function barcodeGenerator(input) {
    let startingNum = input[0].toString();
    let endingNum = input[1].toString();

    let startingNumFirst = startingNum[0];
    let startingNumSecond = startingNum[1];
    let startingNumThird = startingNum[2];
    let startingNumFourth = startingNum[3];

    let endingNumFirst = endingNum[0];
    let endingNumSecond = endingNum[1];
    let endingNumThird = endingNum[2];
    let endingNumFourth = endingNum[3];

    let printLine = "";
    for (let first = startingNumFirst; first <= endingNumFirst; first++) {
        for (let second = startingNumSecond; second <= endingNumSecond; second++) {
            for (let third = startingNumThird; third <= endingNumThird; third++) {
                for (let fourth = startingNumFourth; fourth <= endingNumFourth; fourth++) {
                    if (first % 2 !== 0 && second % 2 !== 0 && third % 2 !== 0 && fourth % 2 !== 0) {
                        printLine += `${first}${second}${third}${fourth} `;
                    }
                }
            }
        }
    }
    console.log(printLine);
}

barcodeGenerator(["2345","6789"]);