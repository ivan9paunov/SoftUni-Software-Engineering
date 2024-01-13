function listOfNames(inputArr) {
    inputArr.sort((a, b) => a.localeCompare(b));

    for (let i = 1; i <= inputArr.length; i++) {
        console.log(`${i}.${inputArr[i-1]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);