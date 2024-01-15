function orbit(inputArr) {
    let [rows, cols, x, y] = inputArr;
    const matrix = new Array(rows).fill().map(() => new Array(cols).fill(false));
    let counter = 1;
    matrix[x][y] = counter;
    
    let includesFalse = true;
    let topRow = x;
    let bottomRow = x;
    let leftCol = y;
    let rigthCol = y;

    while (includesFalse) {
        counter++;
        
        topRow--;
        bottomRow++;
        leftCol--;
        rigthCol++;

        if (topRow >= 0) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[topRow][i] = counter;
            }
        }
        
        if (bottomRow < matrix.length) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[bottomRow][i] = counter;
            }
        }

        if (leftCol >= 0) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][leftCol] = counter;
            }
        }
        
        if (rigthCol < matrix.length) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][rigthCol] = counter;
            }
        }
        
        includesFalse = false;
        
        for (let row of matrix) {
            if (row.includes(false)) {
                includesFalse = true;
                break;
            }
        }
    }
    
    matrix.forEach((row) => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);