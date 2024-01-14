function sortAnArrayByTwoCriteria(wordsArr) {
    wordsArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(wordsArr.join('\n'));
}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);