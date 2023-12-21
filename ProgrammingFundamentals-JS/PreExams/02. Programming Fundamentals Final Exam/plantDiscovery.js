function plantDiscovery(inputArr) {
    let totalPlants = Number(inputArr.shift());
    let discoveredPlants = {};

    for (let plants = 0; plants < totalPlants; plants++) {
        let plantInfo = inputArr.shift().split('<->');
        let plantName = plantInfo[0];
        let rarity = Number(plantInfo[1]);
        let rating = 0.00;
        let totalRatings = 0;

        if (plantName in discoveredPlants) {
            discoveredPlants[plantName].rarity = rarity;
        } else {
            discoveredPlants[plantName] = { rarity, rating, totalRatings };
        }
    }

    let command = inputArr.shift();

    while (command != 'Exhibition') {
        let tokens = command.split(': ');
        let action = tokens.shift();
        
        if (action == 'Rate') {
            let [plant, rating] = tokens.shift().split(' - ');
            rating = Number(rating);

            if (plant in discoveredPlants) {
                discoveredPlants[plant].rating += rating;
                discoveredPlants[plant].totalRatings++;
            } else {
                console.log('error');
            }
        } else if (action == 'Update') {
            let [plant, newRarity] = tokens.shift().split(' - ');
            newRarity = Number(newRarity);

            if (plant in discoveredPlants) {
                discoveredPlants[plant].rarity = newRarity;
            } else {
                console.log('error');
            }
        } else if (action == 'Reset') {
            let plant = tokens.shift();

            if (plant in discoveredPlants) {
                discoveredPlants[plant].rating = 0;
                discoveredPlants[plant].totalRatings = 0;
            } else {
                console.log('error');
            }
        }

        command = inputArr.shift();
    }

    console.log('Plants for the exhibition:');

    let entries = Object.entries(discoveredPlants);

    for (let entry of entries) {
        let plantName = entry.shift();
        let plantStatts = entry.shift();
        let stattsValues = Object.values(plantStatts);
        let [rarity, ratings, totalRatings] = stattsValues;
        let avgRating = 0;
        if (ratings > 0) {
            avgRating = ratings / totalRatings;
        }

        console.log(`- ${plantName}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}

// plantDiscovery(
//     [
//         "3",
//         "Arnoldii<->4",
//         "Woodii<->7",
//         "Welwitschia<->2",
//         "Rate: Woodii - 10",
//         "Rate: Welwitschia - 7",
//         "Rate: Arnoldii - 3",
//         "Rate: Woodii - 5",
//         "Update: Woodii - 5",
//         "Reset: Arnoldii",
//         "Exhibition"
//     ]
// );

plantDiscovery(
    [
        "3",
        "Arnoldii<->4",
        "Woodii<->7",
        "Welwitschia<->2",
        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"
    ]
);