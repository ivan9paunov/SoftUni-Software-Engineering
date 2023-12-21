function gameShop(input) {
    let games = Number(input[0]);
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let currentGame = 1; currentGame <= games; currentGame++) {
        let gameName = input[currentGame];
        if (gameName === "Hearthstone") {
            hearthstone++;
        } else if (gameName === "Fornite") {
            fornite++;
        } else if (gameName === "Overwatch") {
            overwatch++;
        } else {
            others++;
        }
    }
    console.log(`Hearthstone - ${(hearthstone / games * 100).toFixed(2)}%`); 
    console.log(`Fornite - ${(fornite / games * 100).toFixed(2)}%`); 
    console.log(`Overwatch - ${(overwatch / games * 100).toFixed(2)}%`); 
    console.log(`Others - ${(others / games * 100).toFixed(2)}%`); 
}

gameShop(["4","Hearthstone","Fornite","Overwatch","Counter-Strike"]);