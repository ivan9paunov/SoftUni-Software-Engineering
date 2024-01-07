function asciiSumator(inputArr) {
    let [startChar, endChar, msg] = inputArr;
    let startIdx = startChar.charCodeAt();
    let endIdx = endChar.charCodeAt();
    let start = Math.min(startIdx, endIdx);
    let end = Math.max(startIdx, endIdx);
    let sum = 0;
    
    for (let char of msg) {
        let charCode = char.charCodeAt();

        if (charCode > start && charCode < end) {
            sum += charCode;
        }
    }

    console.log(sum);
}

asciiSumator([
    '.',
    '@',
    'dsg12gr5653feee5'
]);

// asciiSumator([
//     'a',
//     '1',
//     'jfe392$#@j24ui9ne#@$'
// ]);