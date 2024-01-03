function sequences(inputArr) {
    let sortedSequences = {};

    for (let line of inputArr) {
        let seq = JSON.parse(line);
        let sorted = seq.sort((a, b) => b - a);
        
        if (sorted in sortedSequences) {
            continue;
        } else {
            sortedSequences[sorted] = sorted;
        }
    }

    let sequencesKVPs = Object.values(sortedSequences).sort((a, b) => a.length - b.length);
    sequencesKVPs.forEach((seq) => console.log(`[${seq.join(', ')}]`));
}

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);

// sequences([
//     "[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"
// ]);