function evenPositionElement(inputArr) {
    let filtered = [];

    for (let i = 0; i < inputArr.length; i += 2) {
        filtered.push(inputArr[i]);
    }

    console.log(filtered.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);