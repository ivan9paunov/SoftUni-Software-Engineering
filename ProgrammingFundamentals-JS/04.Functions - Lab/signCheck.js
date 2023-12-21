function signCheck(num1, num2, num3) {
    let arr = [num1, num2, num3];
    let negatives = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negatives++;
        }
    }

    if (negatives % 2 != 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);