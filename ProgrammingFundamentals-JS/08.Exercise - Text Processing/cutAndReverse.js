function cutAndReverse(str) {
    let textLength = str.length;
    let firstPart = str.slice(0, (textLength / 2));
    let secondPart = str.slice((textLength / 2), textLength);

    let firstWord = '';
    let secondWord = '';
    
    for (let char = firstPart.length - 1; char >= 0; char--) {
        firstWord += firstPart[char];
    }

    for (let char = secondPart.length - 1; char >= 0; char--) {
        secondWord += secondPart[char];
    }

    console.log(firstWord);
    console.log(secondWord);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');