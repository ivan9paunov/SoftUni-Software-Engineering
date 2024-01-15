function diagonalAttack(inputArr) {
    let matrix = [];
    let rightDiagonalSum = 0;
    let leftDiagonalSum = 0;
    
    //converting the input to real matrix
    for (let row of inputArr) {
        row = row.split(' ').map(Number);
        matrix.push(row);
    }

    //summing the diagonals
    for (let i = 0; i < matrix.length; i++) {
        let toRight = matrix[i][i];
        let toLeft = matrix[i][matrix.length - 1 - i];
        rightDiagonalSum += toRight;
        leftDiagonalSum += toLeft;
    }

    if (rightDiagonalSum == leftDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (j == i || j == matrix.length - 1 - i) {
                    continue;
                } else {
                    matrix[i][j] = rightDiagonalSum;
                }
            }
        }
    }

    matrix.forEach((row) => console.log(row.join(' ')));
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);