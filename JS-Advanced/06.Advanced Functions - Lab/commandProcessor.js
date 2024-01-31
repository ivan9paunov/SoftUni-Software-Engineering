function solution() {
    let manipulatedString = '';
    
    let operations = {
        append(str) {
            manipulatedString += str;
        },
        removeStart(num) {
            manipulatedString = manipulatedString.slice(num, manipulatedString.length);
        },
        removeEnd(num) {
            let cuttedNums = -Math.abs(num);
            manipulatedString = manipulatedString.slice(0, cuttedNums);
        },
        print() {
            console.log(manipulatedString);
        }
    }

    return operations;
}

let firstZeroTest = solution();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print();