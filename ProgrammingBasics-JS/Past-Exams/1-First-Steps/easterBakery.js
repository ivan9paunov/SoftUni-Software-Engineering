function easterBakery(input) {
    let flourPrice = input[0];
    let flourWeight = input[1];
    let sugarWeight = input[2];
    let eggShells = input[3];
    let yeastPackets = input[4];
    let sugarPrice = flourPrice * 0.75;
    let eggShellsPrice = flourPrice * 1.10;
    let yeastPacketsPrice = sugarPrice * 0.20;
    let flourTotal = flourPrice * flourWeight;
    let sugarTotal = sugarPrice * sugarWeight;
    let eggShellsTotal = eggShellsPrice * eggShells;
    let yeastTotal = yeastPacketsPrice * yeastPackets;
    let totalSum = flourTotal + sugarTotal + eggShellsTotal + yeastTotal;
    console.log(totalSum.toFixed(2));
}

easterBakery(["50", "10", "3.5", "6", "1"]);