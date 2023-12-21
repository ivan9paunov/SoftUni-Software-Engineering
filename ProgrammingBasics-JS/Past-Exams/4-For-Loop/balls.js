function balls(input) {
    let ballsNumber = input[0];
    let red = 0;
    let redPoints = 5;
    let orange = 0;
    let orangePoints = 10;
    let yellow = 0;
    let yellowPoints = 15;
    let white = 0;
    let whitePoints = 20;
    let black = 0;
    let otherColor = 0;
    let totalPoints = 0;
    for (color = 1; color <= ballsNumber; color++) {
        let currentColor = input[color];
        if (currentColor === "red") {
            red++;
            totalPoints += redPoints;
        } else if (currentColor === "orange") {
            orange++;
            totalPoints += orangePoints;
        } else if (currentColor === "yellow") {
            yellow++;
            totalPoints += yellowPoints;
        } else if (currentColor === "white") {
            white++;
            totalPoints += whitePoints;
        } else if (currentColor === "black") {
            black++;
            totalPoints = Math.floor(totalPoints / 2);
        } else {
            otherColor++;
        } 
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${otherColor}`);
    console.log(`Divides from black balls: ${black}`);
}

// balls(["3","white","black","pink"]);
balls(["5","red","red","ddd","ddd","ddd"]);
