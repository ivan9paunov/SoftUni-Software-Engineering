function makeADictionary(dictionary) {
    let dictionaryObj = {};

    for (let line of dictionary) {
        let wordAndDefinition = JSON.parse(line);
        let word = Object.keys(wordAndDefinition);
        let definition = Object.values(wordAndDefinition);

        dictionaryObj[word] = definition;
    }
    
    let sortedDictionary = Object.entries(dictionaryObj).sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedDictionary.forEach(a => console.log(`Term: ${a[0]} => Definition: ${a[1]}`));
}

makeADictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);