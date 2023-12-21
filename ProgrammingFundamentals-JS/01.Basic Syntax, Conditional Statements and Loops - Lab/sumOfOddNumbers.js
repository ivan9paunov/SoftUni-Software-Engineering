function sumOfOddNumbers(n) {
    let sum = 0;

    for (let count = 1; count <= n * 2; count += 2) {
        console.log(count);
        sum += count;        
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);