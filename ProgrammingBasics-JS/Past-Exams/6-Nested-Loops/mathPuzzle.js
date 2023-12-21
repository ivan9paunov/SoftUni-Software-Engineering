function mathPuzzle(input) {
    let magicNumber = Number(input[0]);

    for (let first = 1; first <= 30; first++) {
        for (let second = 1; second <= 30; second++) {
            for (let third = 1; third <= 30; third++) {
                if (first < second && second < third && (first + second + third === magicNumber)) {
                    console.log(`${first} + ${second} + ${third} = ${magicNumber}`);
                    continue;
                }

                if (first > second && second > third && (first * second * third === magicNumber)) {
                    console.log(`${first} * ${second} * ${third} = ${magicNumber}`);
                }
            }
        }
    }
}

// mathPuzzle(["12"]);
mathPuzzle(["100"]);