function amazingNumbers(num) {
    num = String(num);
    let sum = 0;
    
    for (let digit = 0; digit < num.length; digit++) {
        sum += Number(num[digit]);
    }

    sum = String(sum);
    let includesNine = "False";
    for (let check = 0; check < sum.length; check++) {
        if (sum[check] == "9") {
            includesNine = "True";
        }
    }
    console.log(`${num} Amazing? ${includesNine}`);
}

amazingNumbers(1233);
// amazingNumbers(999);