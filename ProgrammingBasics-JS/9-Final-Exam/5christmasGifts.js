function christmasGifts(input) {
    let index = 0;
    let command = input[index];
    index++;

    let adults = 0;
    let kids = 0;

    while(command !== "Christmas") {
        let age = Number(command);
        if (age <= 16) {
            kids++;
        } else {
            adults++;
        }

        command = input[index];
        index++;

    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    let moneyForToys = kids * 5;
    console.log(`Money for toys: ${moneyForToys}`);
    let moneyForSweaters = adults * 15;
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

christmasGifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);