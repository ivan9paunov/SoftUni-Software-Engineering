function smallestTwoNumbers(arr) {

    let sortedInAscending = arr.sort((a, b) => a - b);
    // let printArr = [];

    // for (let num = 0; num < 2; num++) {
    //     let curNum = sortedInAscending[num];
    //     printArr.push(curNum);
    // }
    
    console.log(sortedInAscending.slice(0, 2).join(' '));
}

// smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);