function biggerHalf(numsArr) {
    const half = Math.floor(numsArr.length / 2);
    numsArr.sort((a, b) => a - b);
    const biggerHalf = numsArr.slice(half, numsArr.length);

    // console.log(biggerHalf);

    return biggerHalf;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);
// biggerHalf([4, 7, 2, 5]);