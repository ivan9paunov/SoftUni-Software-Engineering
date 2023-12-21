function stringGame(inputArr) {
    let str = inputArr.shift();

    let commandLine = inputArr.shift();

    while (commandLine != 'Done') {
        let tokens = commandLine.split(' ');
        let action = tokens.shift();

        if (action == 'Change') {
            let [char, replacement] = tokens;

            while (str.includes(char)) {
                str = str.replace(char, replacement);
            }

            console.log(str);

        } else if (action == 'Includes') {
            let substr = tokens.shift();

            if (str.includes(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (action == 'End') {
            let substr = tokens.shift();

            if (str.endsWith(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (action == 'Uppercase') {
            str = str.toUpperCase();
            console.log(str);

        } else if (action == 'FindIndex') {
            let char = tokens.shift();
            let idx = str.indexOf(char);
            console.log(idx);

        } else if (action == 'Cut') {
            let startIdx = Number(tokens.shift());
            let count = Number(tokens.shift());
            let endIdx = startIdx + count;
            let substr = str.slice(startIdx, endIdx);
            console.log(substr);
        }

        commandLine = inputArr.shift();
    }
}

stringGame(
    (["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"])
);