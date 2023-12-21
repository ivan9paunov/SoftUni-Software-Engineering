function nikuldenMeals(inputArr) {
    let guestList = {};
    let unlikedMeals = 0;

    let commandLine = inputArr.shift();

    while (commandLine != 'Stop') {
        let tokens = commandLine.split('-');
        let [action, person, meal] = tokens;

        if (action == 'Like') {
            if (person in guestList) {
                if (!guestList[person].includes(meal)) {
                    guestList[person].push(meal);
                }
            } else {
                guestList[person] = [];
                guestList[person].push(meal);
            }
        } else if (action == 'Unlike') {
            if (person in guestList) {
                if (guestList[person].includes(meal)) {
                    let idx = guestList[person].indexOf(meal);
                    guestList[person].splice(idx, 1);
                    console.log(`${person} doesn't like the ${meal}.`);
                    unlikedMeals++;
                } else {
                    console.log(`${person} doesn't have the ${meal} in his/her collection.`);
                }
            } else {
                console.log(`${person} is not at the party.`);
            }
        }
 
        commandLine = inputArr.shift();
    }

    let entries = Object.entries(guestList).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    for (let entry of entries) {
        console.log(`${entry[0]}: ${entry[1].join(', ')}`);
    }

    console.log(`Unliked meals: ${unlikedMeals}`);
}

// nikuldenMeals(
//     [
//         'Like-Krisi-shrimps',
//         'Like-Krisi-soup',
//         'Like-Misho-salad',
//         'Like-Pena-dessert',
//         'Stop'
//     ]
// );

nikuldenMeals(
    [
        'Like-Krisi-shrimps',
        'Unlike-Vili-carp',
        'Unlike-Krisi-salad',
        'Unlike-Krisi-shrimps',
        'Stop'
    ]
);