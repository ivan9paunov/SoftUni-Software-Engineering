function censoredWord(sentence, word) {
    let censored = '*'.repeat(word.length);
    
    while (sentence.includes(word)) {
        sentence = sentence.replace(word, censored);
    }

    console.log(sentence);
}

censoredWord(
    'A small sentence with some words',
    'small'
);

