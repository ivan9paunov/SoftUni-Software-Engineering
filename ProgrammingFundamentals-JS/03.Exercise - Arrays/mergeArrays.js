function mergeArrays(arr1, arr2) {
    let mergedArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let currentIndex;
        if (i % 2 == 0) {
            currentIndex = Number(arr1[i]) + Number(arr2[i]);
        } else {
            currentIndex = arr1[i] + arr2[i];
        }

        mergedArr.push(currentIndex);
    }

    console.log(mergedArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11']);