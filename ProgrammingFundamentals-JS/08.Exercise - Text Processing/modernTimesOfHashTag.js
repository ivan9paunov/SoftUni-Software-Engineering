function modernTimesOfHashTag(text) {
    let wordsOfText = text.split(' ');

    for (let word of wordsOfText) {
        if (word.startsWith('#') && word.length > 1) {
            let specialWord = word.substring(1, word.length);
            let isValid = true;

            for (let char of specialWord) {
                let charNum = char.charCodeAt(0);
                if ((charNum >= 65 && charNum <= 90) || (charNum >= 97 && charNum <= 122)) {
                    continue;
                } else {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(specialWord);
            }
        }
    }
}

modernTimesOfHashTag(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
);