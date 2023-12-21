function muOnline(roomsString) {
    let rooms = roomsString.split('|');

    let health = 100;
    let totalCoins = 0;
    let bestRoom = 0;

    for (let curRoom of rooms) {
        let tokens = curRoom.split(' ');
        bestRoom++;
        let command = tokens[0];

        if (command == 'potion') {
            let heal = Number(tokens[1]);
            
            if (health + heal > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`You healed for ${heal} hp.`);
                health += heal;
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command == 'chest') {
            let coins = Number(tokens[1]);
            console.log(`You found ${coins} bitcoins.`);
            totalCoins += coins;
        } else {
            let attack = Number(tokens[1]);
            health -= attack;

            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
    }

    if (health > 0) {
        console.log('You\'ve made it!');
        console.log(`Bitcoins: ${totalCoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");