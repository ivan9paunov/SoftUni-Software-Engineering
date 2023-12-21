function negativeOrPositiveNumbers(arr) {
    resultArr = [];

    for (let el of arr) {
        if (el < 0) {
            resultArr.unshift(el);
        } else {
            resultArr.push(el);
        }
    }

    console.log(resultArr.join('\n'));
}

// negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);