function printEveryNthElementFromAnArray(inputArr, n) {
    let filteredArr = [];

    for (let i = 0; i < inputArr.length; i += n) {
        filteredArr.push(inputArr[i]);
    }

    // console.log(filteredArr);
    return filteredArr;
}

printEveryNthElementFromAnArray(
    ['5', '20', '31', '4', '20'],
    2
);