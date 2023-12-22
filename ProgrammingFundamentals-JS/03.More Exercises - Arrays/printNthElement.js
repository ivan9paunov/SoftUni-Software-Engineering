function printNthElement(inputArr) {
    let step = Number(inputArr.pop());
    let printArr = [];
    
    for (let i = 0; i < inputArr.length; i += step) {
        printArr.push(inputArr[i]);
    }

    console.log(printArr.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
// printNthElement(['dsa', 'asd', 'test', 'test', '2']);
// printNthElement(['1', '2', '3', '4', '5', '6']);