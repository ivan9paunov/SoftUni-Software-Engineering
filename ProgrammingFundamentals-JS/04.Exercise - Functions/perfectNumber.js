function perfectNumber(num) {
    let sumOfDivisors = 0;

    for (let count = 1; count < num; count++) {
        if (num % count == 0) {
            sumOfDivisors += count;
        }
    }

    if (sumOfDivisors == num) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

perfectNumber(6);
// perfectNumber(28);
// perfectNumber(1236498);