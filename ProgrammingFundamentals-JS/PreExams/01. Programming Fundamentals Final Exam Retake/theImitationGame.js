function theImitationGame(inputArr) {
    let message = inputArr.shift();

    let commandLine = inputArr.shift();

    while (commandLine != 'Decode') {
        let tokens = commandLine.split('|');
        let action = tokens.shift();

        if (action == 'Move') {
            let numberOfLetters = Number(tokens.shift());
            message = message.slice(numberOfLetters) + message.slice(0, numberOfLetters);
        } else if (action == 'Insert') {
            let idx = Number(tokens.shift());
            let value = tokens.shift();
            message = message.slice(0, idx) + value + message.slice(idx);
        } else if (action == 'ChangeAll') {
            let [substr, replacement] = tokens;

            while (message.includes(substr)) {
                message = message.replace(substr, replacement);
            }
        }

        commandLine = inputArr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

// theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are', 
//     'Insert|9|?', 
//     'Decode' 
// ]);