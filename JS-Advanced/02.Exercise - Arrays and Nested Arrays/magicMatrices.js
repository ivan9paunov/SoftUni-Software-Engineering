function magicMatrices(numsArr) {
    const magicSum = numsArr[0].reduce((sum, val) => sum + val, 0);

    for (let i = 0; i < numsArr.length; i++) {
        let rowSum = numsArr[i].reduce((sum, val) => sum + val, 0);
        let colSum = 0;

        for (let j = 0; j < numsArr.length; j++) {
            colSum += numsArr[j][i];
        }

        if (colSum != magicSum || rowSum != magicSum) {
            console.log(false);
            return;
        }
    }

    console.log(true);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

// magicMatrices([
//     [11, 32, 45], 
//     [21, 0, 1], 
//     [21, 1, 1]]
// );

// magicMatrices([
//     [1, 0, 0], 
//     [0, 0, 1], 
//     [0, 1, 0]]
// );