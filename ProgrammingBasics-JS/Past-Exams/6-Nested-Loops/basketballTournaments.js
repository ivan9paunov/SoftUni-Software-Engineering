function basketballTournaments(input) {
    let index = 0;
    let tournamentName = input[index];
    index++;

    let wins = 0;
    let loses = 0;
    let totalGames = 0;

    while (tournamentName !== "End of tournaments") {
        let games = input[index];
        index++;
        let gameNumber = 0;
        
        for (let game = 1; game <= games; game++) {
            gameNumber++;
            totalGames++;
            let ourTeam = input[index];
            index++;
            let rivals = input[index];
            index++;
            
            if (ourTeam > rivals) {
                wins++;
                console.log(`Game ${gameNumber} of tournament ${tournamentName}: win with ${ourTeam - rivals} points.`);
            } else {
                loses++;
                console.log(`Game ${gameNumber} of tournament ${tournamentName}: lost with ${rivals - ourTeam} points.`);
            }
        }
        
        tournamentName = input[index];
        index++;
    }
    console.log(`${((wins / totalGames) * 100).toFixed(2)}% matches win`);
    console.log(`${((loses / totalGames) * 100).toFixed(2)}% matches lost`);
}

// basketballTournaments(["Dunkers","2","75","65","56","73",
//                         "Fire Girls","3","67","34","83","98","66","45",
//                         "End of tournaments"]);
basketballTournaments(["Ballers","3","87","63","56","65","75","64",
                        "Sharks","4","64","76","65","86","68","99","45","78",
                        "End of tournaments"]);