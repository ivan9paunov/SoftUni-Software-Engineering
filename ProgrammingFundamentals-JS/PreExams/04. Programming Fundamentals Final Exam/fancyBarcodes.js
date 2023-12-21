function fancyBarcodes(inputArr) {
    let totalBarcodes = inputArr.shift();

    let pattern = /@#+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])@#+/;

    for (let i = 0; i < totalBarcodes; i++) {
        let currentLine = inputArr[i];

        let match = currentLine.match(pattern);

        if (match != null) {
            let { barcode } = match.groups;
            let nums = [];
            
            for (let char of barcode) {
                let code = char.charCodeAt();
                
                if (code >= 48 && code <= 57) {
                    nums.push(char);
                }
            }

            if (nums.length == 0) {
                console.log('Product group: 00');
            } else {
                console.log(`Product group: ${nums.join('')}`);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes(
    [
        "3",
        "@#FreshFisH@#",
        "@###Brea0D@###",
        "@##Che4s6E@##"
    ]
);

// fancyBarcodes(
//     [
//         "6",
//         "@###Val1d1teM@###",
//         "@#ValidIteM@#",
//         "##InvaliDiteM##",
//         "@InvalidIteM@",
//         "@#Invalid_IteM@#",
//         "@#ValiditeM@#"
//     ]
// );

