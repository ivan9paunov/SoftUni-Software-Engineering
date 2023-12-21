function destinationMapper(str) {
    let destinations = [];
    let travelPoints = 0;

    let pattern = /([=/])[A-Z][A-Za-z]{2,}\1/gm;

    let matches = str.match(pattern);

    if (matches) {
        for (let match of matches) {
            let destination = match.slice(1, match.length - 1);
            destinations.push(destination);
            travelPoints += destination.length;
        }
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
// destinationMapper("ThisIs some InvalidInput");
