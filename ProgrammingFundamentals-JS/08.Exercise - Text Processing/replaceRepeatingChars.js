function replaceRepeatingChars(str) {
    let printLine = '';
    let lastChar = '';

    for (let char of str) {
        if (char == lastChar) {
            continue;
        } else {
            printLine += char;
            lastChar = char;
        }
    }

    console.log(printLine);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
// replaceRepeatingChars('qqqwerqwecccwd');