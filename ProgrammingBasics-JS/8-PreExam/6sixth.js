function sixthExam(input) {
    let number = Number(input[0]);

    let requiredNum = 0;
    let isFound = false;

    for (let a = 1; a <= 9; a++) {
        if(isFound) {
            break;
        }
        for (let b = 9; b >= a; b--) {
            if(isFound) {
                break;
            }
            for (let c = 0; c <= 9; c++) {
                if(isFound) {
                    break;
                }
                for (let d = 9; d >= c; d--) {
                   
                    let mult = a * b * c * d;
                    let sum = a + b + c + d;

                    if (mult === sum && number % 10 === 5) {
                        requiredNum = `${a}${b}${c}${d}`;
                        isFound = true;
                        break;
                    }

                    if (((mult / sum) >= 3 && (mult / sum) < 4) && number % 3 === 0) {
                        requiredNum = `${d}${c}${b}${a}`;
                        isFound = true;
                        break;
                    }
                    

                }
            }
        }
    }
    if(!isFound) {
        console.log("Nothing found");
    } else {
        console.log(requiredNum);  
    }
}

sixthExam(["123"]);