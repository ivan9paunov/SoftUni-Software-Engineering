function worldTour(inputArr) {
    let destinations = inputArr.shift();

    let inputLine = inputArr.shift();

    while (inputLine != 'Travel') {
        let tokens = inputLine.split(':');
        let command = tokens.shift();

        if (command == 'Add Stop') {
            let idx = Number(tokens[0]);
            let str = tokens[1];

            if (idx >= 0 && idx < destinations.length) {
                destinations = destinations.slice(0, idx) + str + destinations.slice(idx);
                console.log(destinations);
            }
        } else if (command == 'Remove Stop') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            let partToRemove = destinations.slice(startIndex, endIndex + 1);
            
            if ((startIndex >= 0 && startIndex < destinations.length) &&
                (endIndex >= 0 && endIndex < destinations.length) &&
                startIndex <= endIndex) {
                destinations = destinations.replace(partToRemove, ``);
            }
            
            console.log(destinations);
        } else if (command == 'Switch') {
            let [oldStr, newStr] = tokens;
            
            if (destinations.includes(oldStr)) {
                destinations = destinations.replace(oldStr, newStr);
            }

            console.log(destinations);
        }

        inputLine = inputArr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}

worldTour(
    [
        "Hawai::Cyprys-Greece",
        "Add Stop:7:Rome",
        "Remove Stop:11:16",
        "Switch:Hawai:Bulgaria",
        "Travel"
    ]
);
