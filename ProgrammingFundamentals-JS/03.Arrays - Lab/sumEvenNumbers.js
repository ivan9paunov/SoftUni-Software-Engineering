// variant from lab with for-of
function sumEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let sum = 0;
    for (let current of arr) {
        if (current % 2 == 0) {
            sum += current
        }
    }

    console.log(sum);
}


// ----> my variant
// function sumEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let current = Number(arr[i]);
//         if (current % 2 == 0) {
//             sum += current;
//         }
//     }
    
//     console.log(sum);
// }

sumEvenNumbers(['1','2','3','4','5','6']);
// sumEvenNumbers(['3','5','7','9']);
// sumEvenNumbers(['2','4','6','8','10']);