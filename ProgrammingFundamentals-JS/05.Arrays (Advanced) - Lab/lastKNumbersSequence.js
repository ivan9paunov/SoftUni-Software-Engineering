function lastKNumbersSequence(n, k) {
    let arr = [1];
    
    for (let count = 0; count < n - 1; count++) {
        let sliced = arr.slice(-k);
        let sum = 0;

        for (let i = 0; i < sliced.length; i++) {
            sum += sliced[i];
        }

        arr.push(sum);    
    }

    console.log(arr.join(' '));
}

// lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);