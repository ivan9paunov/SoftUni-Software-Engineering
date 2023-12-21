function dungeonestDark(arr) {
    let roomsInfo = arr[0];
    let rooms = roomsInfo.split('|');
    
    let health = 100;
    let coins = 0;
    let roomsCount = 0;

    for (let el of rooms) {
        
        let room = el.split(' ');
        let itemOrMonster = room[0];
        let misteriousNum = Number(room[1]);
        roomsCount++;
        
        if (itemOrMonster == "potion") {
            if ((health + misteriousNum) > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health += misteriousNum;
                if (health > 100) {
                    health = 100;
                }
                console.log(`Current health: ${health} hp.`);
            } else if (((health + misteriousNum) <= 100)){
                health += misteriousNum;
                console.log(`You healed for ${misteriousNum} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            
        } else if (itemOrMonster == "chest") {
            coins += misteriousNum;
            console.log(`You found ${misteriousNum} coins.`);

        } else {
            health -= misteriousNum;

            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${roomsCount}`);
                break;
            }
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);