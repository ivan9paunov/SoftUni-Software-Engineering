function addAndSubtract(arr) {
    let originalSum = 0;
    let modifiedSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);
        originalSum += current;
        
        if (current % 2 == 0) {
            current += i;
        } else {
            current -= i;
        }
        
        arr[i] = current;
        modifiedSum += current;
    }
    
    console.log(arr);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);