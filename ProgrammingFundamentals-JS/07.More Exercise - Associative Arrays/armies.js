function armies(inputArr) {
    let legions = {};
    let armyLeaders = [];

    for (let line of inputArr) {
        if (line.includes('arrives')) {
            let leader = line.split(' ');
            let arrives = leader.pop();
            leader = leader.join(' ');

            if (!(leader in legions)) {
                legions[leader] = {
                    armyNames: {},
                    totalArmyCount: 0
                };
            }
            armyLeaders.push(leader);

        } else if (line.includes(':')) {
            let [leader, army] = line.split(': ');
            let [name, count] = army.split(', ');
            count = Number(count);
            
            if (leader in legions) {
                if (!(name in legions[leader].armyNames)) {
                    legions[leader].armyNames[name] = count;
                    legions[leader].totalArmyCount += count;
                }
            }

        } else if (line.includes('+')) {
            let [armyName, count] = line.split(' + ');
            count = Number(count);

            armyLeaders.forEach(leader => {
                for (let army in legions[leader]) {
                    if (legions[leader][army].hasOwnProperty(armyName)) {
                        legions[leader].armyNames[armyName] += count;
                        legions[leader].totalArmyCount += count;
                    }
                }
            });
            
        } else if (line.includes('defeated')) {
            let leader = line.split(' ');
            let defeated = leader.pop();
            leader = leader.join(' ');
            let idxOfLeader = armyLeaders.indexOf(leader);

            if (leader in legions) {
                delete legions[leader];
                armyLeaders.splice(idxOfLeader, 1);
            }
        }
    }

    let legionsKVPs = Object.entries(legions).sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount);

    for (let armies of legionsKVPs) {
        let [leader, allArmies] = armies;
        console.log(`${leader}: ${allArmies.totalArmyCount}`);
        
        let allArmiesEntries = Object.entries(allArmies.armyNames).sort((a, b) => b[1] - a[1]);
        for (let army of allArmiesEntries) {
            console.log(`>>> ${army.join(' - ')}`);
        }
    }
}

armies([
    'Rick Burr arrives', 
    'Fergus: Wexamp, 30245', 
    'Rick Burr: Juard, 50000', 
    'Findlay arrives', 
    'Findlay: Britox, 34540', 
    'Wexamp + 6000',
    'Juard + 1350', 
    'Britox + 4500',
    'Porter arrives', 
    'Porter: Legion, 55000', 
    'Legion + 302', 
    'Rick Burr defeated', 
    'Porter: Retix, 3205'
]);