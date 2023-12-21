function fitnessCard(input) {
    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let cardPrice = 0;
    switch (gender) {
        case "m": {
            switch (sport) {
                case "Gym"    : cardPrice = 42.00; break;
                case "Boxing" : cardPrice = 41.00; break;
                case "Yoga"   : cardPrice = 45.00; break;
                case "Zumba"  : cardPrice = 34.00; break;
                case "Dances" : cardPrice = 51.00; break;
                case "Pilates": cardPrice = 39.00; break;
            }
        }
        break;
        case "f": {
            switch (sport) {
                case "Gym"    : cardPrice = 35.00; break;
                case "Boxing" : cardPrice = 37.00; break;
                case "Yoga"   : cardPrice = 42.00; break;
                case "Zumba"  : cardPrice = 31.00; break;
                case "Dances" : cardPrice = 53.00; break;
                case "Pilates": cardPrice = 37.00; break;
            }
        }
        break;
    }
    
    if(age <= 19){
        cardPrice = cardPrice * 0.80;
    }

    if(budget >= cardPrice){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else if (cardPrice > budget) {
        console.log(`You don't have enough money! You need $${(cardPrice - budget).toFixed(2)} more.`);
    }
}

fitnessCard(["20","f","15","Yoga"]);