function biggerHalf(arr: number[]): number[] {
    arr.sort((a: number, b: number) => a - b);
    const halfNumber: number = Math.floor(arr.length / 2);
    const resultArray: number[] = arr.slice(halfNumber);
    return resultArray;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));