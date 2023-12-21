function gameNumberWars(input) {
    let index = 0;
    let playerOne = input[index];
    index++;
    let playerTwo = input[index];
    index++;
    let command = input[index];

    let endOfGame = false;
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let playerOneTotal = 0;
    let playerTwoTotal = 0;

    while (command !== "End of game") {
        let playerOneCard = Number(command);
        index++;
        let playerTwoCard = Number(input[index]);
        index++;
        if (playerOneCard > playerTwoCard) {
            playerOneScore = playerOneCard - playerTwoCard;
            playerOneTotal = playerOneTotal + playerOneScore;
        } else if (playerTwoCard > playerOneCard) {
            playerTwoScore = playerTwoCard - playerOneCard;
            playerTwoTotal = playerTwoTotal + playerTwoScore;
        } else {
            endOfGame = true;
            playerOneCard = Number(input[index]);
            index++;
            playerTwoCard = Number(input[index]);
            index++;
            if (playerOneCard > playerTwoCard) {
                console.log("Number wars!");
                console.log(`${playerOne} is winner with ${playerOneTotal} points`);
                break;
            } else if (playerTwoCard > playerOneCard) {
                console.log("Number wars!");
                console.log(`${playerTwo} is winner with ${playerTwoTotal} points`);
                break;
            }
        }

        command = input[index];
    }

    if (!endOfGame) {
        console.log(`${playerOne} has ${playerOneTotal} points`);
        console.log(`${playerTwo} has ${playerTwoTotal} points`);
    }
}

// gameNumberWars(["Desi","Niki","7","5","3","4","3","3","5","3"]);
// gameNumberWars(["Elena","Simeon","6","3","2","5","8","9","End of game"]);
gameNumberWars(["Aleks","Georgi","4","5","3","2","4","3","4","4","5","2","End of game"]);