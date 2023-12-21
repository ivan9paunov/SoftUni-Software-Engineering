function thePianist(inputArr) {
    let numberOfPieces = inputArr.shift();
    let pieces = {};

    let commandLine = inputArr.shift();

    for (let count = 1; count <= numberOfPieces; count++) {
        let tokens = commandLine.split('|');
        let [piece, composer, key] = tokens;

        pieces[piece] = { composer, key };

        commandLine = inputArr.shift();
    }

    while (commandLine != 'Stop') {
        let tokens = commandLine.split('|');
        let action = tokens.shift();

        if (action == 'Add') {
            let [piece, composer, key] = tokens;

            if (piece in pieces) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }

        } else if (action == 'Remove') {
            let piece = tokens.shift();

            if (piece in pieces) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (action == 'ChangeKey') {
            let [piece, newKey] = tokens;

            if (piece in pieces) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        commandLine = inputArr.shift();
    }

    let entries = Object.entries(pieces);

    for (let entry of entries) {
        let pieceName = entry.shift();
        let pieceData = entry.shift();
        let values = Object.values(pieceData);
        let [composer, key] = values;
        console.log(`${pieceName} -> Composer: ${composer}, Key: ${key}`);
    }
}

thePianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
    ]  
);