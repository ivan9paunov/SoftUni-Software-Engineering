function logistics(input){
    let cargosCount = Number(input[0]);
    let price = 0;
    let totalCargo = 0;
    let microbus = 0;
    let truck = 0;
    let train = 0;

    for(let cargo = 1; cargo <= cargosCount; cargo++){
        let cargoWeight = Number(input[cargo]);
        totalCargo += cargoWeight;
        if (cargoWeight <= 3) {
            price += cargoWeight * 200;
            microbus += Number(input[cargo]);
        } else if (cargoWeight <= 11) {
            price += cargoWeight * 175;
            truck += Number(input[cargo]);
        } else {
            price += cargoWeight * 120;
            train += Number(input[cargo]);
        }
    }
    
    let averagePrice = price / totalCargo;

    console.log(averagePrice.toFixed(2));
    console.log(`${((microbus / totalCargo) * 100).toFixed(2)}%`);
    console.log(`${((truck / totalCargo) * 100).toFixed(2)}%`);
    console.log(`${((train / totalCargo) * 100).toFixed(2)}%`);
}

logistics(["5","2","10","20","1","7"]);