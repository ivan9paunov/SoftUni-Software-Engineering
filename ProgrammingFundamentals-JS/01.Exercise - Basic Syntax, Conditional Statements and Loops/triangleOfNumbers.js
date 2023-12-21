function triangleOfNumbers(maxRow) {
    
    for (let row = 1; row <= maxRow; row++) {

        console.log(`${row} `.repeat(row));
    }
}

triangleOfNumbers(5);


// function triangleOfNumbers(maxRow) {
    
//     for (let row = 1; row <= maxRow; row++) {
//         let printLine = "";

//         for (let count = 1; count <= row; count++) {
//             printLine += `${row} `;
//         }

//         console.log(printLine);
//     }
// }

// triangleOfNumbers(5);