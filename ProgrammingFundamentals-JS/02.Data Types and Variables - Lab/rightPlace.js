function rightPlace(string, char, correctWord) {

    let newWord = '';

    for (let check = 0; check < string.length; check++) {
        let symbol =  string[check];
        if (symbol == '_') {
            symbol = char;
        }
        newWord += symbol;
    }

    if (newWord == correctWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');

// variant2

// function place(word, symbol, match) {
//     let result = '';

//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == '_') {
//             result += symbol;
//         } else {
//             result += word[i];
//         }
//     }

//     if (result == match) {
//         console.log('Matched');
//     } else {
//         console.log('Not Matched');
//     }
// }