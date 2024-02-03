function subSum(arr, startIdx, endIdx) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (startIdx < 0) {
        startIdx = 0;
    }

    if (endIdx >= arr.length) {
        endIdx = arr.length - 1;
    }

    let sum = 0;
    let slicedArr = arr.slice(startIdx, endIdx + 1);

    for (let el of slicedArr) {
        if (typeof el != 'number') {
            return NaN;
        }

        sum += el;
    }

    return sum;
}

// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
// subSum('text', 0, 2);