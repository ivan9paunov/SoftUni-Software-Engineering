function sortArray(numsArr, operation) {
    if (operation == 'asc') {
        numsArr.sort((a, b) => a - b);
    } else if (operation == 'desc') {
        numsArr.sort((a, b) => b - a);
    }

    return numsArr;
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');