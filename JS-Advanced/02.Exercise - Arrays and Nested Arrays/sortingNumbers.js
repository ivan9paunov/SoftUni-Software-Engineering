function sortingNumbers(numsArr) {
    numsArr.sort((a, b) => a - b);
    let sortedArr = [];

    while (numsArr.length > 0) {
        let min = numsArr.shift();
        sortedArr.push(min);

        if (numsArr.length == 0) {
            break;
        }

        let max = numsArr.pop();
        sortedArr.push(max);

    }

    // console.log(sortedArr);
    return sortedArr;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);