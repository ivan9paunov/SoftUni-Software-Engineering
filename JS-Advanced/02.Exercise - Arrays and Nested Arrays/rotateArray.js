function rotateArray(inputArr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let el = inputArr.pop();
        inputArr.unshift(el);
    }

    console.log(inputArr.join(' '));
}

rotateArray(
    ['Banana', 'Orange', 'Coconut', 'Apple'], 
    15
);