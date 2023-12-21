function theHuntingGames(arr) {
    let arrToNumber = arr.map(Number);
    let days = arrToNumber.shift();
    let players = arrToNumber.shift();
    let groupsEnergy = arrToNumber.shift();
    let waterPerPerson = arrToNumber.shift();
    let foodPerPerson = arrToNumber.shift();

    let totalWater = days * players * waterPerPerson;
    let totalFood = days * players * foodPerPerson;

    for (let day = 1; day <= days; day++) {
        let energyLost = arrToNumber.shift();
        groupsEnergy -= energyLost;

        if (groupsEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }

        if (day % 2 == 0) {
            groupsEnergy *= 1.05;
            totalWater *= 0.70;
        }

        if (day % 3 == 0) {
            totalFood -= totalFood / players;
            groupsEnergy *= 1.10;
        }

    }

    if (groupsEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    }
}

theHuntingGames([
    '10',
    '7',
    '5035.5',
    '11.3',
    '7.2',
    '942.3',
    '500.57',
    '520.68',
    '540.87',
    '505.99',
    '630.3',
    '784.20',
    '321.21',
    '456.8',
    '330'
]);

// theHuntingGames([
//     "12",
//     "6",
//     "4430",
//     "9.8",
//     "5.5",
//     "620.3",
//     "840.2",
//     "960.1",
//     "220",
//     "340",
//     "674",
//     "365",
//     "345.5",
//     "212",
//     "412.12",
//     "258",
//     "496"
// ]);