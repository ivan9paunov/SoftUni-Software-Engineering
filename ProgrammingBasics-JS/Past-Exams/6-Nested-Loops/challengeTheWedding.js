function challengeTheWedding(input) {
    let male = Number(input[0]);
    let female = Number(input[1]);
    let tables = Number(input[2]);

    let combinations = 0;
    let printLine = "";
    let isFull = false;

    for (let one = 1; one <= male; one++) {
        for (let two = 1; two <= female; two++) {
            combinations++;
            printLine += `(${one} <-> ${two}) `;
            if (combinations === tables) {
                isFull = true;
                break;
            }
        }

        if (isFull) {
            break;
        }
    }

    console.log(printLine);
}

// challengeTheWedding(["2","2","6"]);
challengeTheWedding(["2","2","3"]);
// challengeTheWedding(["5","8","40"]);