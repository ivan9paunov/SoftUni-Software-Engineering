function pascalCaseSplitter(str) {
    // str = str.split(/[A-Z][a-z]+/);
    let printLine = str[0];
    let text = str.substring(1, str.length);

    for (let char of text) {
        let charNum = char.charCodeAt(0);

        if (charNum >= 65 && charNum <= 90) {
            printLine += `, ${char}`;
        } else if (charNum >= 97 && charNum <= 122) {
            printLine += char;
        }
    }

    console.log(printLine);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');