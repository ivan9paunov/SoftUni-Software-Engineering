function secretChat(inputArr) {
    let concealedMsg = inputArr.shift();

    let commandLine = inputArr.shift();

    while (commandLine != 'Reveal') {
        let tokens = commandLine.split(':|:');
        let action = tokens.shift();

        if (action == 'InsertSpace') {
            let idx = Number(tokens.shift());
            concealedMsg = concealedMsg.slice(0, idx) + ' ' + concealedMsg.slice(idx);
            console.log(concealedMsg);
        } else if (action == 'Reverse') {
            let substr = tokens.shift();

            if (concealedMsg.includes(substr)) {
                let idx = concealedMsg.indexOf(substr);
                let endIdx = idx + substr.length;
                concealedMsg = concealedMsg.slice(0, idx) + concealedMsg.slice(endIdx);
                substr = substr.split('').reverse().join('');
                concealedMsg = concealedMsg + substr;
                console.log(concealedMsg);
            } else {
                console.log('error');
            }
        } else if (action == 'ChangeAll') {
            let [substr, replacement] = tokens;

            while (concealedMsg.includes(substr)) {
                concealedMsg = concealedMsg.replace(substr, replacement);
            }

            console.log(concealedMsg);
        }

        commandLine = inputArr.shift();
    }

    console.log(`You have a new text message: ${concealedMsg}`);
}

secretChat(
    [
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ]
);

// secretChat(
//     [
//         'Hiware?uiy',
//         'ChangeAll:|:i:|:o',
//         'Reverse:|:?uoy',
//         'Reverse:|:jd',
//         'InsertSpace:|:3',
//         'InsertSpace:|:7',
//         'Reveal'
//     ]
// );