function sumDigits(num) {
    num = String(num);
    let sum = 0;

    for (let digit = 0; digit < num.length; digit++) {
        let currentNum = Number(num[digit]);
        sum += currentNum;
    }
    
    console.log(sum);
}

// sumDigits(245678);
// sumDigits(97561);
sumDigits(543);