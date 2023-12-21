function arrayRotation(arr, rotations) {

    for (let rotation = 1; rotation <= rotations; rotation++) {
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);