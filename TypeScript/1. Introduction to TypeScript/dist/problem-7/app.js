"use strict";
function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    const halfNumber = Math.floor(arr.length / 2);
    const resultArray = arr.slice(halfNumber);
    return resultArray;
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
