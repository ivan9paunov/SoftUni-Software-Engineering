function valueOfAString(inputArr) {
    let message = inputArr.shift();
    let charsCase = inputArr.shift();
    let sum = 0;
    
    for (char of message) {
        let charCode = char.charCodeAt();
        if (charsCase == 'UPPERCASE') {
            if (charCode >= 65 && charCode <= 90) {
                sum += charCode;
            }
        } else if (charsCase == 'LOWERCASE') {
            if (charCode >= 97 && charCode <= 122) {
                sum += charCode
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString([
    'HelloFromMyAwesomePROGRAM',
    'LOWERCASE'
]);

// valueOfAString([
//     'AC/DC',
//     'UPPERCASE'
// ]);