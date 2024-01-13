function printAnArrayWithAGivenDelimiter(wordsArr, delimeter) {
    console.log(wordsArr.join(`${delimeter}`));
}

printAnArrayWithAGivenDelimiter(
    ['One','Two','Three','Four','Five'],
    '-'
);

// printAnArrayWithAGivenDelimiter(
//     ['How about no?', 'I', 'will', 'not', 'do', 'it!'], 
//     '_'
// );