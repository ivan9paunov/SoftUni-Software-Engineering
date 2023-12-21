function mirrorWords(inputArr) {
    let str = inputArr.shift();
    let matchedWords = 0;
    let wordsArr = [];
    let pattern = /([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gm;

    let matches = str.matchAll(pattern);

    for (let match of matches) {
        matchedWords++;
        let { first, second } = match.groups;
        
        let reversed = second.split('').reverse().join('');
        
        if (first == reversed) {
            let mirrored = '';
            mirrored = `${first} <=> ${second}`;
            wordsArr.push(mirrored);
        }
    }
    
    if (matchedWords > 0) {
        console.log(`${matchedWords} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (wordsArr.length > 0) {
        let printLine = wordsArr.join(', ');
        console.log(`The mirror words are:`);
        console.log(`${printLine}`);
    } else {
        console.log(`No mirror words!`);
    }
}

// mirrorWords(
//     [
//         '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
//     ]
// );

mirrorWords(['kur']);