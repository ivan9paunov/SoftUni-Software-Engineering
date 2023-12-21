function christmasTournament(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let command = input[index];

    let money = 0;
    let winnerDay = 0;
    let loserDay = 0;

    for (let currentDay = 1; currentDay <= days; currentDay++) {
        let wins = 0;
        let loses = 0;
        let dailyMoney = 0;
        while (command !== "Finish") {
            index++;
            let winOrLose = input[index];
            if (winOrLose === "win") {
                dailyMoney += 20;
                wins++;
            } else if (winOrLose === "lose") {
                loses++;
            }
            index++;
            command = input[index];
        }

        if (wins > loses) {
            dailyMoney *= 1.10;
            winnerDay++;
        } else {
            loserDay++;
        }
        money += dailyMoney;
        index++;
        command = input[index];
    }

    if (winnerDay > loserDay) {
        money *= 1.20;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
}

// christmasTournament(["2","volleyball","win","football","lose","basketball","win","Finish","golf","win","tennis","win","badminton","win","Finish"])
christmasTournament(["3","darts","lose","handball","lose","judo","win","Finish",
                         "snooker","lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", 
                         "volleyball", "win", "basketball", "win", "Finish"]);