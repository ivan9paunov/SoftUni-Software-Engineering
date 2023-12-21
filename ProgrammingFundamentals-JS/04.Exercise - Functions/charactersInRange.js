function charactersInRange(symbolOne, symbolTwo) {
    let codeOfFirst = symbolOne.charCodeAt();
    let codeOfSecond = symbolTwo.charCodeAt();

    let minCode = Math.min(codeOfFirst, codeOfSecond);
    let maxCode = Math.max(codeOfFirst, codeOfSecond);
    
    let result = '';

    for (let char = minCode + 1; char < maxCode; char++) {
        let currentChart = String.fromCharCode(char);
        result += `${currentChart} `;    
    }

    console.log(result);
}

charactersInRange('C', '#');

