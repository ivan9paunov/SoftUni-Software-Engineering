function reverseAnArrayOfNumbers(count, numsArray) {

    let newArr = [];
    for (let i = count - 1; i >= 0; i--) {
        newArr.push(numsArray[i]);
    }

    console.log(newArr.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);