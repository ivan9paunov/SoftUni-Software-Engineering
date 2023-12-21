function binaryToDecimal(binary) {
    let numToString = String(binary);
    let reversedString = "";
    
    for (let reverse = numToString.length - 1; reverse >= 0; reverse--) {
        reversedString += numToString[reverse];
    }
    
    let currentSum = 0;
    for (let power = reversedString.length - 1; power >= 0; power--) {
        currentSum += (reversedString[power] * 2**power);
    }
    
    console.log(currentSum);
}

binaryToDecimal(0b001001);
// binaryToDecimal(11110000);