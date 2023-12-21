function goldMine(input) {
    let index = 0;
    let locations = Number(input[index]);
    index++;
    
    for (let location = 1; location <= locations; location++) {
        let avgGoldNeeded = Number(input[index]);
        index++;
        let totalDays = Number(input[index]);
        index++;
        let dailyGold = 0;
        let avgGoldDigged = 0;
        for (let day = 1; day <= totalDays; day++) {
            let command = Number(input[index]);
            index++;
            dailyGold += command;
        }
        avgGoldDigged = dailyGold / totalDays;
        if (avgGoldDigged >= avgGoldNeeded) {
            console.log(`Good job! Average gold per day: ${avgGoldDigged.toFixed(2)}.`);
        } else {
            console.log(`You need ${(avgGoldNeeded - avgGoldDigged).toFixed(2)} gold.`);
        }
    }
}

goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);