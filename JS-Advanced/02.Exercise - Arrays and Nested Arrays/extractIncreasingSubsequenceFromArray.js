function extractIncreasingSubsequenceFromArray(numsArr) {
    let max = Number.MIN_SAFE_INTEGER;

    let output = numsArr.reduce((acc, val) => {
        if (val >= max) {
            max = val;
            acc.push(max);
        }

        return acc;
    }, []);

    // console.log(output);
    return output;
}

extractIncreasingSubsequenceFromArray(
    [1, 3, 8, 4, 10, 12, 3, 2, 24]
);