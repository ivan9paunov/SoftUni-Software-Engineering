function largestNumber(a: number, b: number, c: number): void {
    const maxNum: number = Math.max(a, b, c);
    console.log(`The largest number is ${maxNum}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);