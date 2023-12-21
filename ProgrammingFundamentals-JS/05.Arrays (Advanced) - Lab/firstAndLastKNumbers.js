function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    
    let firstRow = arr.slice(0, k);
    console.log(firstRow.join(' '));
    
    let secondRow = arr.slice(-k);
    console.log(secondRow.join(' '));
}

// firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);