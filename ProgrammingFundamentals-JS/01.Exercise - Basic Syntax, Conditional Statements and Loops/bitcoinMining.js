function bitcoinMining(input) {
    let index = 0;
    let dailyGold = 0;
    let money = 0;
    let bitcoins = 0;
    let whichDay = 0;
    let hasBought = false;

    for (let day = 1; day <= input.length; day++) {
        dailyGold = Number(input[index]);
        index++;
        
        if (day % 3 == 0) {
            dailyGold *= 0.70;
            money += (dailyGold * 67.51);
            while (money >= 11949.16) {
                money -= 11949.16;
                bitcoins++;
            }
        } else {
            money += (dailyGold * 67.51);
            while (money >= 11949.16) {
                money -= 11949.16;
                bitcoins++;
            }
        }

        if (bitcoins > 0 && hasBought == false) {
            whichDay += day;
            hasBought = true;
        }

    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${whichDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);