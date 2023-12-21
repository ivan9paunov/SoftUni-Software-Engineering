function evenAndOddSubtraction(arr) {
    let even = 0;
    let odd = 0;
    for (let num of arr) {
        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }

    let result = even - odd;
    console.log(result);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
// evenAndOddSubtraction([3, 5, 7, 9]);
// evenAndOddSubtraction([2, 4, 6, 8, 10]);