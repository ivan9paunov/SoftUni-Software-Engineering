function convertToObject(input) {
    let converted = JSON.parse(input);
    
    let entries = Object.entries(converted);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');