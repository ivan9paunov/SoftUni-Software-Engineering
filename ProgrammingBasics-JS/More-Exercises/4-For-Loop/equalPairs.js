function equalPairs(input) {
    let pairs = Number(input[0]);
    let firstNum = Number(input[1]);
    let secondNum = Number(input[2]);
    let sum =  firstNum + secondNum;
    let diff = 0;
    let current = 1;
    let bool = true;
    for(i = 1; i <= pairs; i++) {
        firstNum = Number(input[current++]);
        secondNum = Number(input[current++]);
        let currentNum = firstNum + secondNum;

        if (currentNum != sum) {
            let currentDiff = Math.abs(currentNum - sum);
            if (currentDiff > diff) {
                diff = currentDiff;
            }
            sum = currentNum;
            bool = false;
        }
    }
    if (bool) {
        console.log(`Yes, value=${sum}`);
    } else {
        console.log(`No, maxdiff=${diff}`);
    }
}

// equalPairs(["3","1","2","0","3","4","-1"]);
equalPairs(["4","1","1","3","1","2","2","0","0"]);

