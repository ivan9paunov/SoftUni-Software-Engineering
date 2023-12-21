function messageTranslator(inputArr) {
    let totalMessages = inputArr.shift();

    let pattern = /!(?<action>[A-Z][a-z]{2,})!:\[(?<msg>[A-Za-z]{8,})\]/;

    for (let i = 0; i < totalMessages; i++) {
        let curMsg = inputArr[i];

        // let match = pattern.exec(curMsg);
        let match = curMsg.match(pattern);
        let codesArr = [];

        if (match) {
            let { action, msg } = match.groups;
            
            for (let char of msg) {
                code = char.charCodeAt();
                codesArr.push(code);
            }

            console.log(`${action}: ${codesArr.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

messageTranslator(
    [
        '2',
        '!Send!:[IvanisHere]',
        '*Time@:[Itis5amAlready]'
    ]
);

// messageTranslator(
//     [
//         '3',
//         'go:[outside]',
//         '!drive!:YourCarToACarWash',
//         '!Watch!:[LordofTheRings]'
//     ]
// );