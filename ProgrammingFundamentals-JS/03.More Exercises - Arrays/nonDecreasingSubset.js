function nonDecreasingSubset(inputArr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let printArr = [];

    for (let num of inputArr) {
        if (num >= biggestNum) {
            printArr.push(num);
            biggestNum = num;
        }
    }

    console.log(printArr.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);