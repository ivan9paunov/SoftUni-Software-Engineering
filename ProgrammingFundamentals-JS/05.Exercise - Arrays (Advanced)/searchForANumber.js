function searchForANumber(arr1, arr2) {
    let numsToTake = arr2[0];
    let numsToDelete = arr2[1];
    let numToSearch = arr2[2];

    let newArr = arr1.slice(0, numsToTake);
    newArr.splice(0, numsToDelete);

    let timesOccur = 0;

    for (let el of newArr) {
        if (numToSearch == el) {
            timesOccur++;
        }
    }

    console.log(`Number ${numToSearch} occurs ${timesOccur} times.`);
}

searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);

// searchForANumber(
//     [7, 1, 5, 8, 2, 7],
//     [3, 1, 5]
// );