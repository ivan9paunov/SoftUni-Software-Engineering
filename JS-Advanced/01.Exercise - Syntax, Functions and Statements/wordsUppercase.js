function wordsUppercase(str) {
    let words = [];

    let pattern = /\w+/gm;

    let matches = str.matchAll(pattern);

    for (let match of matches) {
        let word = match[0].toUpperCase();
        words.push(word);
    }

    console.log(words.join(', '));
}

wordsUppercase('Hi, how are you?');