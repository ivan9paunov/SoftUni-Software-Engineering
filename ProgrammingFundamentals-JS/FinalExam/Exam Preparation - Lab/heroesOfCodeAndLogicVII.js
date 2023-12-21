function heroesOfCodeAndLogicVII(inputArr) {
    let numberOfHeroes = inputArr.shift();
    let heroes = {};

    let commandLine = inputArr.shift();

    for (let count = 0; count < numberOfHeroes; count++) {
        let [name, hp, mp] = commandLine.split(' ');
        hp = Number(hp);
        mp = Number(mp);

        heroes[name] = { hp, mp };

        commandLine = inputArr.shift();
    }

    while (commandLine != 'End') {
        let tokens = commandLine.split(' - ');
        let action = tokens.shift();

        if (action == 'CastSpell') {
            let [name, mpNeeded, spellName] = tokens;
            mpNeeded = Number(mpNeeded);

            if (heroes[name].mp >= mpNeeded) {
                heroes[name].mp -= mpNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        } else if (action == 'TakeDamage') {
            let [name, damage, attacker] = tokens;
            damage = Number(damage);

            heroes[name].hp -= damage;

            if (heroes[name].hp > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            }

        } else if (action == 'Recharge') {
            let [name, ammount] = tokens;
            ammount = Number(ammount);
            let oldAmmount = heroes[name].mp;

            heroes[name].mp += ammount;

            if (heroes[name].mp > 200) {
                heroes[name].mp = 200;
            }

            let heal = heroes[name].mp - oldAmmount;

            console.log(`${name} recharged for ${heal} MP!`);

        } else if (action == 'Heal') {
            let [name, ammount] = tokens;
            ammount = Number(ammount);
            let oldAmmount = heroes[name].hp;

            heroes[name].hp += ammount;

            if (heroes[name].hp > 100) {
                heroes[name].hp = 100;
            }

            let heal = heroes[name].hp - oldAmmount;

            console.log(`${name} healed for ${heal} HP!`);

        }

        commandLine = inputArr.shift();
    }

    let entries = Object.entries(heroes);

    for (let entry of entries) {
        let name = entry.shift();
        let statts = entry.shift();
        let values = Object.values(statts);
        let [hp, mp] = values;
        console.log(name);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
    }
}

// heroesOfCodeAndLogicVII([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);

heroesOfCodeAndLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);