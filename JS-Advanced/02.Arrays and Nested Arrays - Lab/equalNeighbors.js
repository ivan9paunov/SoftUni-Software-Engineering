function equalNeighbors(matrix) {
    
    let countOfNexts = 0;
    let countOfIdxs = 0;

    let elementAfter = nextToIt(matrix);
    let sameIdx = atTheSameIndex(matrix);
    let totalMatches = elementAfter + sameIdx;

    console.log(totalMatches);

    function nextToIt(matrix) {
        for (let line of matrix) {
            let numsInLine = line.length;
            
            for (let i = 0; i < numsInLine; i++) {
                if (line[i] == line[i + 1]) {
                    countOfNexts++;
                }
            }
        }
        
        return countOfNexts;
    }

    function atTheSameIndex(matrix) {
        let totalLines = matrix.length;

        for (let i = 0; i < totalLines; i++) {
            
            let line = matrix[i];
            
            if (i == totalLines - 1) {
                break;
            }
            
            let nextLine = matrix[i + 1];

            for (let j = 0; j < line.length; j++) {
                if (line[j] == nextLine[j]) {
                    countOfIdxs++;
                }
            }
        }
        
        return countOfIdxs;
    }
}

equalNeighbors([
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
]);
    
// equalNeighbors([
//     ['test', 'yo', 'yo', 'ho'], 
//     ['well', 'done', 'no', '6'], 
//     ['not', 'done', 'yet', '5']
// ]);

// equalNeighbors([
//     ['2', '2', '5', '7', '4'], 
//     ['4', '0', '5', '3', '4'], 
//     ['2', '5', '5', '4', '2']
// ]);