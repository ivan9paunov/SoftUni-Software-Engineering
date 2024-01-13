function processOddPositions(numsArr) {
    let filteredArr = [];

    for (let i = 1; i < numsArr.length; i += 2) {
        let num = numsArr[i] * 2;
        filteredArr.push(num);
    }

    filteredArr.reverse();
    // console.log(filteredArr.join(' '));

    return filteredArr.join(' ');
}

processOddPositions([10, 15, 20, 25]);
// processOddPositions([3, 0, 10, 4, 7, 3]);