function treasureFinder(inputArr) {
    let key = inputArr.shift().split(' ').map(Number);
    let messages = [];
    
    let command = inputArr.shift();

    while (command != 'find') {
        let newMsg = [];
        let idx = 0;
        
        for (let char of command) {
            if (idx == key.length) {
                idx = 0;
            }
            
            let charCode = char.charCodeAt() - key[idx];
            let newChar = String.fromCharCode(charCode);
            newMsg.push(newChar);

            idx++;
        }

        newMsg = newMsg.join('');
        messages.push(newMsg);

        command = inputArr.shift();
    }

    for (let msg of messages) {
        let typeStartIdx = msg.indexOf('&');
        let type = msg.slice(typeStartIdx + 1);
        let typeEndIdx = type.indexOf('&');
        type = type.slice(0, typeEndIdx);
        let coordinatesStart = msg.indexOf('<');
        let coordinatesEnd = msg.indexOf('>');
        let coordinates = msg.slice(coordinatesStart + 1, coordinatesEnd);

        console.log(`Found ${type} at ${coordinates}`);
    }
}

treasureFinder([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"
]);