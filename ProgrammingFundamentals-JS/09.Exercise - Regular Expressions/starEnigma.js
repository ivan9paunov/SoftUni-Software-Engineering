function starEnigma(inputArr) {
    let totalMessages = inputArr.shift();
    let attacked = [];
    let destroyed = [];

    let pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

    for (let rawMessage of inputArr) {
        let starOccurances = 0;
        let msgToLowerCase = rawMessage.toLowerCase();
        let substractedMsg = '';
        
        for (let char of msgToLowerCase) {
            if (char == 's' || char == 't' || char == 'a' || char == 'r') {
                starOccurances++;
            }
        }

        for (let char of rawMessage) {
            let prevCode = char.charCodeAt();
            let newCode = prevCode - starOccurances;
            let newChar = String.fromCharCode(newCode);
            substractedMsg += `${newChar}`
        }

        let match = substractedMsg.match(pattern);
        
        if (match) {
            let { planetName, attackType } = match.groups;
            
            if (attackType == 'A') {
                attacked.push(planetName);
            } else if (attackType == 'D') {
                destroyed.push(planetName);
            }
        }
    }

    attacked = attacked.sort((a, b) => a.localeCompare(b));
    destroyed = destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach((planet) => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach((planet) => console.log(`-> ${planet}`));
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);

// starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);