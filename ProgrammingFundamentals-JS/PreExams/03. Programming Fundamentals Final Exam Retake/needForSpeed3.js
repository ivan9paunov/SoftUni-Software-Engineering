function needForSpeed(inputArr) {
    let numberOfCars = inputArr.shift();
    let garrage = {};

    let commandLine = inputArr.shift();

    for (let count = 1; count <= numberOfCars; count++) {
        let tokens = commandLine.split('|');
        let [car, mileage, fuel] = tokens;
        mileage = Number(mileage);
        fuel = Number(fuel);

        garrage[car] = { mileage, fuel };

        commandLine = inputArr.shift();
    }

    while (commandLine != 'Stop') {
        let tokens = commandLine.split(' : ');
        let action = tokens.shift();

        if (action == 'Drive') {
            let [car, distance, fuel] = tokens;
            distance = Number(distance);
            fuel = Number(fuel);

            if (garrage[car].fuel >= fuel) {
                garrage[car].mileage += distance;
                garrage[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                
                if (garrage[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete garrage[car];
                }
            } else {
                console.log('Not enough fuel to make that ride');
            }

        } else if (action == 'Refuel') {
            let [car, fuel] = tokens;
            fuel = Number(fuel);
            let currentFuel = garrage[car].fuel;

            garrage[car].fuel += fuel;

            if (garrage[car].fuel > 75) {
                garrage[car].fuel = 75;
            }

            console.log(`${car} refueled with ${garrage[car].fuel - currentFuel} liters`);
        } else if (action == 'Revert') {
            let [car, kilometers] = tokens;

            garrage[car].mileage -= kilometers;
            
            if (garrage[car].mileage < 10000) {
                garrage[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }

        commandLine = inputArr.shift();
    }

    let entries = Object.entries(garrage);

    for (let entry of entries) {
        let car = entry.shift();
        let carData = entry.shift();
        let values = Object.values(carData);
        let [mileage, fuel] = values;

        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}

needForSpeed(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]    
);