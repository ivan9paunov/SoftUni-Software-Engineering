function multiplicationTable(num) {
    for (let sequence = 1; sequence <= 10; sequence++) {
        let currentMul = num * sequence;
        console.log(`${num} X ${sequence} = ${currentMul}`);
    }
}

multiplicationTable(5);