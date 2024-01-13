function lastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let start = i - k;

        if (start < 0) {
            start = 0;
        }

        let cut = sequence.slice(start, i);
        let num = cut.reduce((sum, val) => sum + val);
        sequence.push(num);
    }
    
    return sequence;

    // console.log(sequence);
}

lastKNumbersSequence(6, 3);
// lastKNumbersSequence(8, 2);