function passwordGenerator(inputArr) {
    let [firstString, secondString, word] = inputArr;
    let concatenatedStrings = firstString + secondString;
    word = word.toUpperCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let idx = 0;

    for (let char of concatenatedStrings) {
        if (idx >= word.length) {
            idx = 0;
        }

        if (vowels.includes(char)) {
            concatenatedStrings = concatenatedStrings.replace(char, word[idx]);
            idx++;
        }
    }

    let password = concatenatedStrings.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator(
    [
        'ilovepizza',
        'ihatevegetables',
        'orange'
    ]
);