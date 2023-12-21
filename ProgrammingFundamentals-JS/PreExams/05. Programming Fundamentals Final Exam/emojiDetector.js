function emojiDetector(inputArr) {
    let text = inputArr.shift();

    let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/gm;
    let coolPattern = /\d/gm;

    let matches = text.matchAll(pattern);
    let coolMatches = text.match(coolPattern);
    let coolThreshold = coolMatches.reduce((sum, val) => sum * val);
    console.log(`Cool threshold: ${coolThreshold}`);
    let emojisFound = text.match(pattern).length;
    console.log(`${emojisFound} emojis found in the text. The cool ones are:`);

    for (let match of matches) {
        let { emoji } = match.groups;
        let coolness = 0;
        
        for (let char of emoji) {
            let code = char.charCodeAt();
            coolness += code;
        }

        if (coolness > coolThreshold) {
            console.log(match[0]);
        }
    }
}

emojiDetector(
    ["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]
);

// emojiDetector(
//     ["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]
// );

// emojiDetector(
//     ["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]
// );