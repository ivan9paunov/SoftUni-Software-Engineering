function bombNumbers(sequence, bomb) {
    let [specialNum, power] = bomb;

    while (sequence.includes(specialNum)) {
        let occuranceIndex = sequence.indexOf(specialNum);
        let start = occuranceIndex - power;
        if (start < 0) {
            start = 0;
        }
        let steps = power * 2 + 1;
        sequence.splice(start, steps);
    }

    let sum = 0;
    
    for (let el of sequence) {
        sum += el;
    }

    console.log(sum);
}

// bombNumbers(
//     [1, 2, 2, 4, 2, 2, 2, 9], 
//     [4, 2]
// );

// bombNumbers(
//     [1, 4, 4, 2, 8, 9, 1], 
//     [9, 3]
// );

// bombNumbers(
//     [1, 7, 7, 1, 2, 3], 
//     [7, 1]
// );

bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);