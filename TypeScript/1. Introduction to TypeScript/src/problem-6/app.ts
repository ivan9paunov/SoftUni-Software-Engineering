function evenPositionElement(arr: string[]): void {
    let result: string[] = [];
    
    for (let i = 0; i < arr.length; i++) {
        let curNum: string = arr[i];

        if (i % 2 == 0) {
            result.push(curNum);
        }
    }

    console.log(result.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);