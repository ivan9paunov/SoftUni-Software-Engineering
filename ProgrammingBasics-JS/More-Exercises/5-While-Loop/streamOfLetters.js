function streamOfLetters(input) {
    let currentSymbol = input.shift();
    let wordCollector = "";
    let firstC = false;
    let firstO = false;
    let firstN = false;
    let word = "";

    while (currentSymbol !== "End") {
        if ((currentSymbol >= "A" && currentSymbol <= "Z") || (currentSymbol >= "a" && currentSymbol <= "z")) {

            if (currentSymbol === "c") {
                if (firstC) { // doesn't appear
                    wordCollector += currentSymbol;
                }
                firstC = true;
            } else if (currentSymbol === "o") {
                if (firstO) { // doesn't appear
                    wordCollector += currentSymbol;
                }
                firstO = true;
            } else if (currentSymbol === "n") {
                if (firstN) { // doesn't appear
                    wordCollector += currentSymbol;
                }
                firstN = true;
            } else {
                wordCollector += currentSymbol;
            }

            if (firstC && firstO && firstN) {
                word += `${wordCollector} `;
                wordCollector = "";
                firstC = false;
                firstO = false;
                firstN = false;
            }
        }
            currentSymbol = input.shift();
    }
    console.log(word);
}

streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
