function sumOfNumbers(a: string, b: string): void {
    const num1: number = Number(a);
    const num2: number = Number(b);
    let sum: number = 0;

    for (let i: number = num1; i <= num2; i++) {
        sum += i;
    }

    console.log(sum);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');