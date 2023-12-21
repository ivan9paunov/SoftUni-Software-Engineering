function revealWords(wordsToFind, text) {
    let words = wordsToFind.split(', ');

    for (let word of words) {
        let censored = '*'.repeat(word.length);
        if (text.includes(censored)) {
            text = text.replace(censored, word);
        }
    }

    console.log(text);
}

revealWords(
    'great',
    'softuni is ***** place for learning new programming languages'
);