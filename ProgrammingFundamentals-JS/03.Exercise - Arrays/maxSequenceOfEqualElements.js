function maxSequenceOfEqualElements(arr) {
    let maxSequence = 0;
    let printNum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let currentSequence = 1;

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currentNum == nextNum) {
                currentSequence++;
            } else {
                break;
            }
        }

        if (currentSequence > maxSequence) {
            maxSequence = currentSequence;
            printNum = currentNum;
        }
    }

    let printArr = [];
    for (let i = 1; i <= maxSequence; i++) {
        printArr.push(printNum);
    }

    console.log(printArr.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);