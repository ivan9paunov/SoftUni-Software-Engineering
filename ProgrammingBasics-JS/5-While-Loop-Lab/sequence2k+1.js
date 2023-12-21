function sequence2k(input) {
    let targetNumber = Number(input[0]);
    let sum = 1;
    while(sum <= targetNumber) {
        console.log(sum);
        sum = sum * 2 + 1;
    }
}

sequence2k(["8"]);