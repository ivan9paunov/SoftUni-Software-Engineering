function triplesOfLatinLetters(n) {
    
    for (let firstCol = 1; firstCol <= n; firstCol++) {
        let firstLetter = String.fromCharCode(96 + firstCol);

        for (let secondCol = 1; secondCol <= n; secondCol++) {
            let secondLetter = String.fromCharCode(96 + secondCol);

            for (let thirdCol = 1; thirdCol <= n; thirdCol++) {
                let thirdLetter = String.fromCharCode(96 + thirdCol);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

triplesOfLatinLetters(3);
// triplesOfLatinLetters(2);