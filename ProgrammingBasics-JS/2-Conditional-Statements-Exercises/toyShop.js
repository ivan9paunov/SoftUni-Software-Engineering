function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = puzzles * 2.60;
    let talkingDollsPrice = talkingDolls * 3.00;
    let teddyBearsPrice = teddyBears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2.00;
    let moneyFromToys = puzzlesPrice + talkingDollsPrice + teddyBearsPrice + minionsPrice + trucksPrice;
    let numberOfToys = puzzles + talkingDolls + teddyBears + minions + trucks;
    
    if (numberOfToys >= 50) {
        moneyFromToys *= 0.75;
    }
    let rentPrice = moneyFromToys * 0.10;
    let profit = moneyFromToys - rentPrice;
    if (profit - tripPrice >= 0) {
        console.log(`Yes! ${(profit - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - profit).toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);