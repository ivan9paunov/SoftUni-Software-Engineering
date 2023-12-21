function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let oldElement = arr[i];
        let previousIndex = arr.length - 1 - i;
        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement;
    }

    console.log(arr.join(' '));
}

// ----> with new arra7y
// function reverseInPlace(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr += `${arr[i]} `;
//     }

//     console.log(newArr);
// }

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseInPlace(['33', '123', '0', 'dd']);