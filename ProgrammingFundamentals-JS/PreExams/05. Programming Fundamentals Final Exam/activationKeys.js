function activationKeys(inputArr) {
    let key = inputArr.shift();

    let commandLine = inputArr.shift();

    while (commandLine != 'Generate') {
        let tokens = commandLine.split('>>>');
        let action = tokens.shift();

        if (action == 'Contains') {
            let substr = tokens.shift();

            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log('Substring not found!');
            }

        } else if (action == 'Flip') {
            let upOrLow = tokens.shift();
            let startIdx = Number(tokens.shift());
            let endIdx = Number(tokens.shift());

            if (upOrLow == 'Upper') {
                let substr = key.slice(startIdx, endIdx).toUpperCase();
                key = key.slice(0, startIdx) + substr + key.slice(endIdx);
                console.log(key);
            } else if (upOrLow == 'Lower') {
                let substr = key.slice(startIdx, endIdx).toLowerCase();
                key = key.slice(0, startIdx) + substr + key.slice(endIdx);
                console.log(key);
            }

        } else if (action == 'Slice') {
            let startIdx = Number(tokens.shift());
            let endIdx = Number(tokens.shift());

            key = key.slice(0, startIdx) + key.slice(endIdx);
            console.log(key);
        }

        commandLine = inputArr.shift();
    }

    console.log(`Your activation key is: ${key}`);
}

activationKeys(
    [
        "abcdefghijklmnopqrstuvwxyz",
        "Slice>>>2>>>6",
        "Flip>>>Upper>>>3>>>14",
        "Flip>>>Lower>>>5>>>7",
        "Contains>>>def",
        "Contains>>>deF",
        "Generate"
    ]
);