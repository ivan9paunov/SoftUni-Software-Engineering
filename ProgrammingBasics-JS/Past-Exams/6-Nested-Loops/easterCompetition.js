function easterCompetition(input) {
    let index = 0;
    let competitors = Number(input[index]);
    index++;
    let command = input[index];

    let recordPoints = 0;
    let totalPoints = 0;
    let winner = "";

    for (let competitor = 1; competitor <= competitors; competitor++) {
        let currentName = command;
        index++;
        let currentPoints = input[index];
        totalPoints = 0;
        while (currentPoints !== "Stop") {
            currentPoints = Number(currentPoints);
            totalPoints += currentPoints;

            index++;
            currentPoints = input[index];
        }

        console.log(`${currentName} has ${totalPoints} points.`);
        if (totalPoints > recordPoints) {
            recordPoints = totalPoints;
            winner = currentName;
            console.log(`${currentName} is the new number 1!`);
        }

        index++;
        command = input[index];

    }
    console.log(`${winner} won competition with ${recordPoints} points!`);
}

// easterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop",
//     "Natalie", "8", "2", "9", "Stop",
//     "George", "9", "2", "4", "2", "Stop"]);
easterCompetition(["2", "Chef Angelov", "9", "9", "9", "Stop",
    "Chef Rowe", "10", "10", "10", "10", "Stop"]);