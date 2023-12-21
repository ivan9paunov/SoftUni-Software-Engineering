function pirates(inputArr) {
    let destinations = {};

    let commandLine = inputArr.shift();

    while (commandLine != 'Sail') {
        let [city, population, gold] = commandLine.split('||');
        population = Number(population);
        gold = Number(gold);

        if (city in destinations) {
            destinations[city].population += population;
            destinations[city].gold += gold;
        } else {
            destinations[city] = { population, gold };
        }

        commandLine = inputArr.shift();
    }

    commandLine = inputArr.shift();

    while (commandLine != 'End') {
        let tokens = commandLine.split('=>');
        let action = tokens.shift();

        if (action == 'Plunder') {
            let [city, people, gold] = tokens;
            people = Number(people);
            gold = Number(gold);


            destinations[city].population -= people;
            destinations[city].gold -= gold;

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (destinations[city].gold <= 0 || destinations[city].population <= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete destinations[city];
            }

        } else if (action == 'Prosper') {
            let [city, gold] = tokens;
            gold = Number(gold);

            if (gold >= 0) {
                destinations[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${destinations[city].gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }

        commandLine = inputArr.shift();
    }

    let ifExist = Object.keys(destinations).length;
    
    if (ifExist) {
        console.log(`Ahoy, Captain! There are ${ifExist} wealthy settlements to go to:`);
        
        let entries = Object.entries(destinations);
        
        for (let entry of entries) {
            let city = entry.shift();
            let cityStatts = entry.shift();
            let values = Object.values(cityStatts);
            let [population, gold] = values;
            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }

    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

// pirates(
//     [
//         "Tortuga||345000||1250",
//         "Santo Domingo||240000||630",
//         "Havana||410000||1100",
//         "Sail",
//         "Plunder=>Tortuga=>75000=>380",
//         "Prosper=>Santo Domingo=>180",
//         "End"
//     ]
// );

pirates(
    [
        "Nassau||95000||1000",
        "San Juan||930000||1250",
        "Campeche||270000||690",
        "Port Royal||320000||1000",
        "Port Royal||100000||2000",
        "Sail",
        "Prosper=>Port Royal=>-200",
        "Plunder=>Nassau=>94000=>750",
        "Plunder=>Nassau=>1000=>150",
        "Plunder=>Campeche=>150000=>690",
        "End"
    ]
);