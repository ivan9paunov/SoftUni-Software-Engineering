function giftsFromSanta(input) {
    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);

    let printLine = "";
    for (let address = M; address >= N; address--) {
        
        if (address % 2 === 0 && address % 3 === 0) {
            if (address === S) {
                break;
            }
            printLine += `${address} `;
        }

    }

    console.log(printLine);
}

giftsFromSanta(["1", "36", "12"]);