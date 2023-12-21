function printAndSum(numOne, numTwo) {
    printLine = "";
    let sum = 0;
    for (let sequence = numOne; sequence <= numTwo; sequence++) {
        printLine += `${sequence} `;
        sum += sequence;
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

// printAndSum(5, 10);
printAndSum(0, 26);