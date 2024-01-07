function serializeString(input) {
    let str = input.shift();
    let chars = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (chars.hasOwnProperty(char)) {
            chars[char].push(i);
        } else {
            chars[char] = [];
            chars[char].push(i);
        }
    }

    let charsEntries = Object.entries(chars);

    for (let entry of charsEntries) {
        let [char, indexes] = entry;
        console.log(`${char}:${indexes.join('/')}`);
    }
}

serializeString(["avjavamsdmcalsdm"]);