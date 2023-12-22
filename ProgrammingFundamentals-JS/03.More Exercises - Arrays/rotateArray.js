function rotateArray(inputArr) {
    let rotations = inputArr.pop();

    for (let operation = 1; operation <= rotations; operation++) {
        let lastNum = inputArr.pop();
        inputArr.unshift(lastNum);    
    }

    console.log(inputArr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);