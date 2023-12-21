function reverseString(text) {
    let textToString = text.toString();
    let printLine = "";

    for (let reverse = textToString.length - 1; reverse >= 0; reverse--) {
        printLine += textToString[reverse];
    }
    
    console.log(printLine);
}

reverseString("Hello");
// reverseString("Softuni");
// reverseString(1234);