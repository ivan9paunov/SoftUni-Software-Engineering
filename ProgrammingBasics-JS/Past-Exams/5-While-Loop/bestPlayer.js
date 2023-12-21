function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    let topscorerGoals = 0;
    let bestPlayer = "";

    while (command !== "END") {
        let currentFootballer = command;
        index++;
        let playerGoals = Number(input[index]);
        index++;
        if (playerGoals > topscorerGoals) {
            topscorerGoals = playerGoals;
            bestPlayer = currentFootballer;
        }
        if (topscorerGoals >= 10) {
            break;
        }
        command = input[index];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (topscorerGoals >= 3) {
        console.log(`He has scored ${topscorerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${topscorerGoals} goals.`);
    }
}

// bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
// bestPlayer(["Silva","5","Harry Kane","10"]);
// bestPlayer(["Petrov","2","Drogba","11"]);
// bestPlayer(["Rooney","1","Junior","2","Paolinio","2","END"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);



