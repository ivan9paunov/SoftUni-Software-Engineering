function aggregateElements(arr: number[]): void {
    const sumResult: number = arr.reduce((acc: number, val: number) => acc + val);
    console.log(sumResult);

    const inverseResult: number = arr.reduce((acc: number, val: number) => acc + (1/val), 0);
    console.log(inverseResult);

    let concatResult: string = '';
    for (const num of arr) {
        concatResult += num;
    }
    console.log(concatResult);
}

aggregateElements([1, 2, 3]);
console.log('---');
aggregateElements([2, 4, 8, 16]);