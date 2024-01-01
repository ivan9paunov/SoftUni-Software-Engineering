function rosettaStone(inputArr) {
    let lengthOfMatrix = inputArr.shift();
    let alphabet = {0: ' ', 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I',
                    10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q', 18: 'R',
                    19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z'};
    let template = [];

    for (let count = 0; count < lengthOfMatrix; count++) {
        let row = inputArr.shift().split(' ').map(Number);
        template.push(row);
    }

    let matrix = [];

    for (let line of inputArr) {
        let chars = line.split(' ').map(Number);
        matrix.push(chars);
    }

    let loops = 0;
    for (let row = 0, count = 0; row < matrix.length, count < matrix.length; row++, count++) {
        loops++;
        if (loops > matrix.length) {
            break;
        }

        if (count > lengthOfMatrix - 1) {
            count = 0;
        }
        
        let counterLoops = 0;
        for (let char = 0, counter = 0; char < matrix[row].length, counter < matrix[row].length; char++, counter++) {
            counterLoops++;
            if (counterLoops > matrix[row].length) {
                break;
            }
            
            if (counter >= template[count].length) {
                counter = 0;
            }

            matrix[row][char] += template[count][counter];
        }
    }
    
    let message = [];
    for (let row of matrix) {
        for (let el of row) {
            let timesFit = Math.floor(el / 27);
            let substract = timesFit * 27; 
            let char = el - substract;
            message.push(alphabet[char]);
        }
    }

    console.log(message.join(''));
}

rosettaStone([ 
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' 
]);

// rosettaStone([ 
//     '2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22'
// ]);