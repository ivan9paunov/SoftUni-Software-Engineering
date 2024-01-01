function airPollution(matrix, forces) {
    let mapOfSofia = [];

    for (let line of matrix) {
        let areas = line.split(' ').map(Number);
        mapOfSofia.push(areas);
    }

    for (let condition of forces) {
        let [force, idxOrVal] = condition.split(' ');
        idxOrVal = Number(idxOrVal);
        
        if (force == 'breeze') {
            for (let el = 0; el < 5; el++) {
                mapOfSofia[idxOrVal][el] -= 15;

                if (mapOfSofia[idxOrVal][el] < 0) {
                    mapOfSofia[idxOrVal][el] = 0;
                }
            }

        } else if (force == 'gale') {
            for (let row = 0; row < 5; row++) {
                mapOfSofia[row][idxOrVal] -= 20;

                if (mapOfSofia[row][idxOrVal] < 0) {
                    mapOfSofia[row][idxOrVal] = 0;
                }
            }

        } else if (force == 'smog') {
            for (let line of mapOfSofia) {
                for (let area = 0; area < 5; area++) {
                    line[area] += idxOrVal;
                }
            }
        }
    }
    
    let pollutedAreas = [];

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (mapOfSofia[row][col] >= 50) {
                let area = `[${row}-${col}]`;
                pollutedAreas.push(area);
            }
        }
    }

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

// airPollution(
//     ['5 7 72 14 4',
//     '41 35 37 27 33',
//     '23 16 27 42 12',
//     '2 20 28 39 14',
//     '16 34 31 10 24'],

//     ['breeze 1', 'gale 2', 'smog 25']
// );

airPollution(
    ['5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],

    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);