"use strict";
function printAndSum(startNum, endNum) {
    let sum = 0;
    const everyNum = [];
    for (let num = startNum; num <= endNum; num++) {
        sum += num;
        everyNum.push(num);
    }
    const collectionOfNums = everyNum.join(' ');
    console.log(collectionOfNums);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
