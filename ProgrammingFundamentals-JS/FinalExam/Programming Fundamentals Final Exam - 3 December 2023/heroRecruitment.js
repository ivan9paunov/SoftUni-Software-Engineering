function heroRecruitment(inputArr) {
    let heroes = {};

    let commandLine = inputArr.shift();

    while (commandLine != 'End') {
        let tokens = commandLine.split(' ');
        let action = tokens.shift();

        if (action == 'Enroll') {
            let name = tokens.shift();

            if (name in heroes) {
                console.log(`${name} is already enrolled.`);
            } else {
                heroes[name] = [];
            }

        } else if (action == 'Learn') {
            let [name, spellName] = tokens;

            if (name in heroes) {
                if (heroes[name].includes(spellName)) {
                    console.log(`${name} has already learnt ${spellName}.`);
                } else {
                    heroes[name].push(spellName);
                }
            } else {
                console.log(`${name} doesn't exist.`);
            }

        } else if (action == 'Unlearn') {
            let [name, spellName] = tokens;

            if (name in heroes) {
                if (heroes[name].includes(spellName)) {
                    let idx = heroes[name].indexOf(spellName);
                    heroes[name].splice(idx, 1);
                } else {
                    console.log(`${name} doesn't know ${spellName}.`);
                }
            } else {
                console.log(`${name} doesn't exist.`);
            }
        }

        commandLine = inputArr.shift();
    }

    let entries = Object.entries(heroes);
    console.log('Heroes:');

    for (let entry of entries) {
        if (entry[1].length > 0) {
            console.log(`== ${entry[0]}: ${entry[1].join(', ')}`);
        } else {
            console.log(`== ${entry[0]}:`);
        }
    }
}

heroRecruitment(
    [
        "Enroll Stefan",
        "Enroll Peter",
        "Enroll Stefan",
        "Learn Stefan ItShouldWork",
        "Learn John ItShouldNotWork",
        "Unlearn George Dispel",
        "Unlearn Stefan ItShouldWork",
        "End"
    ]
);
