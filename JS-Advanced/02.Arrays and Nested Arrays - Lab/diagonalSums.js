function diagonalSums(numsArr) {
    let toRightSum = 0;
    let toLeftSum = 0;

    for (let i = 0; i < numsArr.length; i++) {
        let numToRight = numsArr[i][i];
        let numToLeft = numsArr[i][numsArr.length - 1 - i];
        toRightSum += numToRight;
        toLeftSum += numToLeft;
    }

    console.log(`${toRightSum} ${toLeftSum}`);
}

diagonalSums([[20, 40], [10, 60]]);
// diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);