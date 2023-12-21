function primeNumberChecker(num) {
    let isComplex = false;
    for (let check = 2; check < num; check++) {
        if (num % check == 0) {
            isComplex = true;
            break;
        }
    }

    let isPrime = false;
    if (isComplex == false) {
        isPrime = true;
    }
    console.log(`${isPrime ? true : false}`);
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);