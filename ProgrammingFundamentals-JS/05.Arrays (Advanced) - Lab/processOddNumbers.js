function processOddNumbers(arr) {
    let newArr = [];

    for (let el = 0; el < arr.length; el++) {
        if (el % 2 != 0) {
            newArr.push(arr[el] * 2);
        }
    }

    console.log(newArr.reverse().join(' '));

    // teacher solution
    // (arr) => arr.filter((x, i) => i % 2 != 0).map(x => x * 2).reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);

