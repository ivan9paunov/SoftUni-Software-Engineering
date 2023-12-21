function sorting(numsArr) {
    let sorted = numsArr.sort((a, b) => b - a);
    let printArr = [];
    
    while (sorted.length > 0) {
        let maxNum = sorted.shift();
        let minNum = sorted.pop();

        printArr.push(maxNum);
        printArr.push(minNum);
    }

    console.log(printArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);