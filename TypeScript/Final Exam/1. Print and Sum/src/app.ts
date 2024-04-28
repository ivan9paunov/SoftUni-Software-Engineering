function printAndSum(startNum: number, endNum: number): void {
    let sum: number = 0;
    const everyNum: number[] = [];

    for (let num = startNum; num <= endNum; num++) {
        sum += num;
        everyNum.push(num);
    }

    const collectionOfNums: string = everyNum.join(' ');
    
    console.log(collectionOfNums);
    console.log(`Sum: ${sum}`);
}

// printAndSum(5, 10);
// printAndSum(0, 26);
// printAndSum(50, 60);