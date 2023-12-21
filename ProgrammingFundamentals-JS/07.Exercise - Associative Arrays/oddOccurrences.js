function oddOccurrences(inputArr) {
    let words = inputArr.toLowerCase().split(' ');
    let wordsOccurances = {};

    for (let word of words) {
        if (!(wordsOccurances.hasOwnProperty(word))) {
            wordsOccurances[word] = 1;
        } else {
            wordsOccurances[word] += 1;
        }
    }

    let entries = Object.entries(wordsOccurances);
    let wordsToPrint = [];

    for (let [key, value] of entries) {
        if (value % 2 != 0) {
            wordsToPrint.push(key);
        }
    }

    console.log(wordsToPrint.join(' '));
}

oddOccurrences(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
);