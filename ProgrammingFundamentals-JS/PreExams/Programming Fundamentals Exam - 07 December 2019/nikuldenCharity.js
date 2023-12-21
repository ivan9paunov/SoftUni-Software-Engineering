function nikuldenCharity(inputArr) {
    let message = inputArr.shift();

    let command = inputArr.shift();

    while (command != 'Finish') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Replace') {
            let [curChar, newChar] = tokens;

            while (message.includes(curChar)) {
                message = message.replace(curChar, newChar);
            }

            console.log(message);

        } else if (action == 'Cut') {
            let startIdx = Number(tokens.shift());
            let endIdx = Number(tokens.shift());

            if (startIdx >= 0 && startIdx < message.length && endIdx >= 0 && endIdx < message.length) {
                message = message.slice(0, startIdx) + message.slice(endIdx + 1);
                console.log(message);
            } else {
                console.log('Invalid indexes!');
            }

        } else if (action == 'Make') {
            let upOrLow = tokens.shift();

            if (upOrLow == 'Upper') {
                message = message.toUpperCase();
            } else if (upOrLow == 'Lower') {
                message = message.toLowerCase();
            }

            console.log(message);

        } else if (action == 'Check') {
            let str = tokens.shift();

            if (message.includes(str)) {
                console.log(`Message contains ${str}`);
            } else {
                console.log(`Message doesn't contain ${str}`);
            }

        } else if (action == 'Sum') {
            let startIdx = Number(tokens.shift());
            let endIdx = Number(tokens.shift());

            if (startIdx >= 0 && startIdx < message.length && endIdx >= 0 && endIdx < message.length) {
                let substr = message.slice(startIdx, endIdx + 1);
                let codeArr = [];

                for (let char of substr) {
                    let code = char.charCodeAt();
                    codeArr.push(code);
                }

                let sum = codeArr.reduce((sum, val) => sum + val);
                console.log(sum);

            } else {
                console.log('Invalid indexes!');
            }
        }

        command = inputArr.shift();
    }
}

nikuldenCharity(
    [
        'ILikeSharan',
        'Replace a e',
        'Make Upper',
        'Check SHEREN',
        'Sum 1 4',
        'Cut 1 4',
        'Finish'
    ]
);