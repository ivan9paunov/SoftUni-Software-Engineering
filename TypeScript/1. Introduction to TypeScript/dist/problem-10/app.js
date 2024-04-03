"use strict";
function aggregateElements(arr) {
    const sumResult = arr.reduce((acc, val) => acc + val);
    console.log(sumResult);
    const inverseResult = arr.reduce((acc, val) => acc + (1 / val), 0);
    console.log(inverseResult);
    let concatResult = '';
    for (const num of arr) {
        concatResult += num;
    }
    console.log(concatResult);
}
aggregateElements([1, 2, 3]);
console.log('---');
aggregateElements([2, 4, 8, 16]);
