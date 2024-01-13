function negativePositiveNumbers(numsArr) {
    let separated = [];

    for (let num of numsArr) {
        if (num >= 0) {
            separated.push(num);
        } else {
            separated.unshift(num);
        }
    }

    console.log(separated.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
// negativePositiveNumbers([3, -2, 0, -1]);