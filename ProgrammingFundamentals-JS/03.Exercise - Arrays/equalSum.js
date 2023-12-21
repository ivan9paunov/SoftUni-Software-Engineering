function equalSum(arr) {
    let isEqual = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let left = 0; left < i; left++) {
            leftSum += arr[left];
        }

        for (let right = i + 1; right < arr.length; right++) {
            rightSum += arr[right];
        }

        if (leftSum === rightSum) {
            isEqual = true;
            console.log(i);
        }
    }

    if (!isEqual) {
        console.log('no');
    }
}

equalSum([1, 2, 3, 3]);
// equalSum([1, 2]);
// equalSum([1]);
// equalSum([1, 2, 3]);
// equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);