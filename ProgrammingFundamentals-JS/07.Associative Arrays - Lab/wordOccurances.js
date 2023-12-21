function wordOccurances(inputArr) {
    let wordCount = {};

    for (let word of inputArr) {
        if (!(wordCount.hasOwnProperty(word))) {
            wordCount[word] = 1;
        } else {
            wordCount[word] += 1;
        }
    }

    let entries = Object.entries(wordCount);
    entries.sort((a, b) => b[1] - a[1]);

    for (let [word, occurances] of entries) {
        console.log(`${word} -> ${occurances} times`);
    }
}

wordOccurances(
    ["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", 
    "And", "finally", "the", "third", "sentence"]
);