function bunnyKill(inputArr) {
    if (inputArr.length > 0) {
        let bombsPositions = inputArr.pop().split(' ');
        let positionsTemplate = [-1, -1, -1, 0, -1, 1, 0, -1, 0, 1, 1, -1, 1, 0, 1, 1];
    
        let bunnies = [];
        let totalDamage = 0;
        let killedBySnowball = 0;
        
        //Separating the bunnies
        for (let curRow of inputArr) {
            let bunniesRow = curRow.split(' ').map(Number);
            bunnies.push(bunniesRow);
        }
        
        //Cells damaged
        for (let bomb of bombsPositions) {
            let [row, col] = bomb.split(',');
            row = Number(row);
            col = Number(col);
            let bombDamage = bunnies[row][col];
            totalDamage += bombDamage;
    
            if (bunnies[row][col] > 0) {
                for (let i = 0; i < positionsTemplate.length; i += 2) {
        
                    let rowPosition = positionsTemplate[i];
                    let colPosition = positionsTemplate[i + 1];
                    let curRow = row + rowPosition;
                    let curCol = col + colPosition;
                    
                    if ((curRow >= 0 && curCol >= 0) && (curRow <= inputArr.length - 1 && curCol <= bunnies[row].length - 1)) {
                        let curBunny = bunnies[curRow][curCol];
                        curBunny -= bombDamage;
        
                        if (curBunny < 0) {
                            curBunny = 0;
                        }
        
                        bunnies[curRow][curCol] = curBunny;
                    } else {
                        continue;
                    }
                }
    
                killedBySnowball++;
                bunnies[row][col] = 0;
            }
        }
        
        let aliveBunnies = [];
        let killedAfter = 0;
    
        for (let bunnyRow of bunnies) {
            for (let bunny of bunnyRow) {
                if (bunny > 0) {
                    aliveBunnies.push(bunny);
                    killedAfter++;
                }
            }
        }
        
        let killedBySnowballDamage = aliveBunnies.reduce((sum, val) => sum + val, 0);
        totalDamage += killedBySnowballDamage;
        killedBySnowball += killedAfter;
        console.log(totalDamage);
        console.log(killedBySnowball);
    } else {
        console.log('0');
        console.log('0');
    }
}

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);

// bunnyKill([
//     '10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0'
// ]);

// bunnyKill([
//     '5 10 15 20 10 10 10 10 10 10 10 10',
//     '10 10 10 10 5 10 15 20 15 10 15 20',
//     '10 15 15 10 1 15 15 10 10 15 15 10',
//     '10 7 10 10 10 15 15 10 10 15 15 10',
//     '3,11 2,2'
// ]); 
