function greatestCommonDivisor(num1, num2) {
    let biggest = Math.max(num1, num2);
    let smallest = Math.min(num1, num2);

    for (let i = smallest; i > 0; i--) {
        if ((biggest % i == 0) && (smallest % i == 0)) {
            console.log(i);
            return;
        }
    }
}

greatestCommonDivisor(15, 5);
// greatestCommonDivisor(2154, 458);