function sumOfNumbers(input) {
    let numAsString = input[0].toString();
    let sum = 0;
    for(let i = 0; i < numAsString.length; i++){
        let num = Number(numAsString[i]);
        sum = sum + num;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["9121995"]);