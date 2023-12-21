function manOWar(arr) {
    let pirateShip = arr.shift().split('>').map(Number);
    let warship = arr.shift().split('>').map(Number);
    let maxHealthCapacity = Number(arr.shift());
    let nextElement = arr.shift();

    while (nextElement != 'Retire') {
        let command = nextElement.split(' ');
        let action = command[0];

        if (action == 'Fire') {
            let idx = command[1];
            let damage = command[2];

            if (idx >= 0 && idx < warship.length) {
                let sectionValue = warship[idx] - damage;
                warship.splice(idx, 1, sectionValue);
                if (sectionValue <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
            }
        } else if (action == 'Defend') {
            let start = Number(command[1]);
            let end = Number(command[2]);
            let damage = Number(command[3]);

            if (start >= 0 && start < pirateShip.length && end >= 0 && end < pirateShip.length) {
                for (let change = start; change <= end; change++) {
                    let sectionOldNum = pirateShip[change];
                    pirateShip.splice(change, 1, sectionOldNum - damage);

                    let newSectionNum = pirateShip[change];
                    if (newSectionNum <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }

            }
        } else if (action == 'Repair') {
            let idx = Number(command[1]);
            let health = Number(command[2]);

            if (idx >= 0 && idx < pirateShip.length) {
                let sectionOldNum = pirateShip[idx];
                let sectionNewNum = sectionOldNum + health;

                if (sectionNewNum > maxHealthCapacity) {
                    sectionNewNum = maxHealthCapacity;
                }

                pirateShip.splice(idx, 1, sectionNewNum);
            }
        } else if (action == 'Status') {
            let twentyPercentage = maxHealthCapacity / 5;
            let count = 0;

            for (let el of pirateShip) {
                if(el < twentyPercentage) {
                    count++;
                }
            }

            console.log(`${count} sections need repair.`);
        }

        nextElement = arr.shift();
    }
    
    let pirateShipSum = 0;
    
    pirateShip.forEach(element => pirateShipSum += element);
    console.log(`Pirate ship status: ${pirateShipSum}`);

    let warshipSum = 0;

    warship.forEach(element => warshipSum += element);
    console.log(`Warship status: ${warshipSum}`);
}

manOWar([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]);