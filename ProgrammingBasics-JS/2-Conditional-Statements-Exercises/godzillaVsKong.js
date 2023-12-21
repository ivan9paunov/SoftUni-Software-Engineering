function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let extrasPeople = Number(input[1]);
    let clothingPrice = Number(input[2]);
    let movieDecor = movieBudget * 0.10;
    if (extrasPeople > 150) {
        clothingPrice *= 0.90;
    }
    let moneyForClothing = extrasPeople * clothingPrice;
    let totalMoney = moneyForClothing + movieDecor;
    if (movieBudget >= totalMoney) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - totalMoney).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMoney - movieBudget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);