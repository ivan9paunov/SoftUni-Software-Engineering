function biggestElement(numsArr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (let row of numsArr) {
        for (let num of row) {
            if (num > biggestNum) {
                biggestNum = num;
            }
        }
    }

    // console.log(biggestNum);
    return biggestNum;
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);