function countStringOccurrences(text, word) {
    let splitText = text.split(' ');
    let count = 0;

    for (let curWord of splitText) {
        if (curWord == word) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);