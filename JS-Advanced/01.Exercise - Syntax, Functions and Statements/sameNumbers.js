function sameNumbers(number) {
    let numsArr = number.toString().split('').map(Number);
    let sum = numsArr.reduce((sum, val) => sum + val);
    let areTheSame = true;
    let prevNum = numsArr.shift();

    for (let num of numsArr) {
        if (num == prevNum) {
            continue;
        } else {
            areTheSame = false;
            break;
        }
    }

    console.log(areTheSame);
    console.log(sum);
}

sameNumbers(2222222);
// sameNumbers(1234);