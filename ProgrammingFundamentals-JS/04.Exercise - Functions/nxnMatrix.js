function nxnMatrix(num) {
    for (let row = 1; row <= num; row++) {
        let curRow = `${num} `.repeat(num);
        console.log(curRow);
    }
}

nxnMatrix(3);