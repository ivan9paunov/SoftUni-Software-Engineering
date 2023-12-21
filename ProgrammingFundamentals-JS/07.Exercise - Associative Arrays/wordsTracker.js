function wordsTracker(inputArr) {
    let wordsToFind = inputArr.shift().split(' ');
    wordsOccurances = {};

    for (let word of wordsToFind) {
        wordsOccurances[word] = 0;
    }

    for (let word of inputArr) {
        if (wordsOccurances.hasOwnProperty(word)) {
            wordsOccurances[word] += 1;
        }
    }

    let entries = Object.entries(wordsOccurances);
    entries.sort((a, b) => b[1] - a[1]);

    for (let [word, occurrences] of entries) {
        console.log(`${word} - ${occurrences}`);
    }
}

wordsTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have',
        'to', 'count', 'the', 'occurrences', 'of',
        'the', 'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'
    ]
);
