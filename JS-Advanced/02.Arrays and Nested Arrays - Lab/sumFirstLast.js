function sumFirstLast(inputArr) {
    let numsArr = inputArr.map(Number);
    let result = numsArr.shift() + numsArr.pop();

    return result;

    // console.log(result);
}

sumFirstLast(['20', '30', '40']);