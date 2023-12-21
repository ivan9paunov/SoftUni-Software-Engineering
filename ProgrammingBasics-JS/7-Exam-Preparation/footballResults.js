function footballResults(input) {
    let wins = 0;
    let loses = 0;
    let drawns = 0;
    for (game = 0; game <= 2; game++) {
        let currentGame = input[game];
        let homeTeam = Number(currentGame[0]);
        let awayTeam = Number(currentGame[2]);
        if (homeTeam > awayTeam) {
            wins++;
        } else if (awayTeam > homeTeam) {
            loses++;
        } else {
            drawns++;
        }
    }
    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${drawns}`);
}

footballResults(["3:1","0:2","0:0"]);