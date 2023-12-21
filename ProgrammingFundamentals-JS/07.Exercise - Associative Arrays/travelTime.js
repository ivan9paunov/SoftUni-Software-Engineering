function travelTime(destinationList) {
    let travelCountries = {};

    for (let destination of destinationList) {
        let [country, town, cost] = destination.split(' > ');
        cost = Number(cost);
        
        if (!(travelCountries.hasOwnProperty(country))) {
            travelCountries[country] = { [town]: cost };
        } else {
            if (travelCountries[country].hasOwnProperty(town)) {
                if (travelCountries[country][town] > cost) {
                    travelCountries[country][town] = cost;
                }
            } else {
                travelCountries[country][town] = cost;
            }
        }
    }

    let kvpDestinations = Object.entries(travelCountries).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [country, towns] of kvpDestinations) {
        let kvpTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        
        let printLine = `${country} -> `;

        for (let [town, cost] of kvpTowns) {
            printLine += `${town} -> ${cost} `;
        }

        console.log(printLine);
    }
}

travelTime(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);