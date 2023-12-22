function magicMatrices(matrix) {
    let size = matrix.length;
    let isMagic = true;

    let rowSum = matrix[0].reduce((sum, val) => sum + val, 0);
    
    for (let row = 0; row < size; row++) {
        let curRowSum = matrix[row].reduce((sum, val) => sum + val, 0);

        if (curRowSum != rowSum) {
            isMagic = false;
            break;
        }
    }

    if (isMagic) {
        for (let col = 0; col < size; col++) {
            let curColSum = 0;
    
            for (let row = 0; row < size; row++) {
                let curRowNum = matrix[row][col];
                curColSum += curRowNum;
            }
            
            if (curColSum != rowSum) {
                isMagic = false;
                break;
            }
        }
    }

    if (isMagic) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);