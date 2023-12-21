function combinations(input) {
    let requestedNumber = Number(input[0]);
    let combinations = 0;
    for (let firstCheck = 0; firstCheck <= requestedNumber; firstCheck++) {
        for (let secondCheck = 0; secondCheck <= requestedNumber; secondCheck++) {
            for (let thirdCheck = 0; thirdCheck <= requestedNumber; thirdCheck++) {
                if (firstCheck + secondCheck + thirdCheck === requestedNumber){
                    combinations++;
                }
                
            }
        }
    }
    console.log(combinations);
}

// combinations(["25"]);
// combinations(["20"]);
combinations(["5"]);