function sumOfNumbersNM(n, m) {
    n = Number(n);
    m = Number(m);
    let result = 0;
    
    for (let count = n; count <= m; count++) {
        result += count;
    }

    console.log(result);
}

sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');
sumOfNumbersNM('-4', '-2');