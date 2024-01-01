function flightSchedule(airportStatus) {
    let airportSector = airportStatus[0];
    let changedStatuses = airportStatus[1];
    let flightStatus = airportStatus[2];

    let flights = {};

    for (let flight of airportSector) {
        let tokens = flight.split(' ');
        let flightID = tokens.shift();
        let destination;

        if (tokens.length > 1) {
            destination = tokens.join(' ');
        } else {
            destination = tokens.shift();
        }

        let status = 'Ready to fly';
        flights[flightID] = { destination, status};
    }

    for (let flight of changedStatuses) {
        let tokens = flight.split(' ');
        let [flightID, newStatus] = tokens;

        if (flightID in flights) {
            flights[flightID].status = newStatus;
        }
    }

    let fligthsValues = Object.values(flights);

    for (let flight of fligthsValues) {
        let flightValues = Object.values(flight);
        let [destination, status] = flightValues;
        
        if (flightStatus == 'Ready to fly') {
            if (status == 'Ready to fly') {
                console.log(`{ Destination: '${destination}', Status: '${status}' }`);
            }
        } else if (flightStatus == 'Cancelled') {
            if (status == 'Cancelled') {
                console.log(`{ Destination: '${destination}', Status: '${status}' }`);
            }
        }
    }
}

flightSchedule([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    [
        'Cancelled'
    ]
]);

// flightSchedule([
//     [
//         'WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York', 
//         'WN1173 California', 
//         'DL2120 Texas', 
//         'KL5744 Illinois', 
//         'WN678 Pennsylvania'
//     ], 
//     [
//         'DL2120 Cancelled', 
//         'WN612 Cancelled', 
//         'WN1173 Cancelled', 
//         'SK330 Cancelled'
//     ], 
//     [
//         'Ready to fly'
//     ] 
// ]);