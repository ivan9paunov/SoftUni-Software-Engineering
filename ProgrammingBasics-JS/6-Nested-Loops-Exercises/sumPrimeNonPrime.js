function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];

    let simpleNumberSum = 0;
    let complexNumberSum = 0;
    let isComplex = false;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        } else {
            for (let check = 2; check < currentNum; check++) {
                if (currentNum % check === 0) {
                    isComplex = true;
                    break;
                }
            }
        }
        
        if (isComplex) {
            complexNumberSum += currentNum;
            isComplex = false;
        } else {
            simpleNumberSum += currentNum;
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${simpleNumberSum}`);
    console.log(`Sum of all non prime numbers is: ${complexNumberSum}`);

}

sumPrimeNonPrime(["3","9","0","7","19","4","stop"]);
