function repeatString(string, timesRepeated) {
    let printLine = '';
    for (let i = 1; i <= timesRepeated; i++) {
        printLine += string;
    }

    return printLine;
}

console.log(repeatString('abc', 3));