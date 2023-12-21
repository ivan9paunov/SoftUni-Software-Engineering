function arenaTier(inputArr) {
    let gladiators = {};

    while (inputArr[0] != 'Ave Cesar') {
        let gladiatorsCommand = inputArr.shift();
        let tokens = gladiatorsCommand.split(' -> ');

        if (tokens.length == 3) {
            let [name, technique, skillAsString] = tokens;
            let skill = Number(skillAsString);

            if (!(name in gladiators)) {
                gladiators[name] = { [technique]: skill };
            } else {
                if (technique in gladiators[name]) {
                    if (gladiators[name][technique] < skill) {
                    gladiators[name][technique] = skill;
                    }
                } else {
                    gladiators[name][technique] = skill;
                }
            }

        } else {
            tokens = gladiatorsCommand.split(' vs ');
            let [player1, player2] = tokens;

            if (player1 in gladiators && player2 in gladiators) {
                let p1Entries = Object.entries(gladiators[player1]);
                let p2Entries = Object.entries(gladiators[player2]);
                
                let p1Techniques = [];
                let p2Techniques = [];
                let p1OveralSkill = 0;
                let p2OveralSkill = 0;

                for (let [technique, skill] of p1Entries) {
                    p1Techniques.push(technique);
                    p1OveralSkill += skill;
                }

                for (let [technique, skill] of p2Entries) {
                    p2Techniques.push(technique);
                    p2OveralSkill += skill;
                }

                for (let curTechnique of p1Techniques) {
                    if (p2Techniques.includes(curTechnique)) {
                        if (p1OveralSkill > p2OveralSkill) {
                            delete gladiators[player2];
                        } else {
                            delete gladiators[player1];
                        }
                    } else {
                        continue;
                    }
                }
            }
        }
    }

    let gladiatorsEntries = Object.entries(gladiators);
    
    for (let entry of gladiatorsEntries) {
        let powers = entry[1];
        let skill = Object.values(powers);
        let totalSkill = skill.reduce((acc, curValue) => acc += curValue);
        entry.push(totalSkill);
    }

    let sortedGladiators = gladiatorsEntries.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));
    
    for (let [name, powers, totalSkill] of sortedGladiators) {
        console.log(`${name}: ${totalSkill} skill`);

        let powersEntries = Object.entries(powers).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [technique, skill] of powersEntries) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
    
}

arenaTier(
    [
        'Peter -> BattleCry -> 400',
        'Alex -> PowerPunch -> 300',
        'Stefan -> Duck -> 200',
        'Stefan -> Tiger -> 250',
        'Ave Cesar'
    ] 
);

// arenaTier(
//     [ 
//         'Peter -> Duck -> 400', 
//         'Julius -> Shield -> 150', 
//         'Gladius -> Heal -> 200', 
//         'Gladius -> Support -> 250', 
//         'Gladius -> Shield -> 250', 
//         'Peter vs Gladius', 
//         'Gladius vs Julius', 
//         'Gladius vs Maximilian', 
//         'Ave Cesar' 
//     ]
// );