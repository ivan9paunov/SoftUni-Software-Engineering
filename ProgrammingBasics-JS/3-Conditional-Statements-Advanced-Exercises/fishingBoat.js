function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = input[2];
    let price = 0;
    switch(season){
        case "Spring":
            if(fishermen <= 6){
                price = 3000 * 0.90;
            } else if(fishermen >=7 && fishermen <= 11) {
                price = 3000 * 0.85;
            } else {
                price = 3000 * 0.75;
            }
        break;
        case "Summer":
        case "Autumn":
            if(fishermen <= 6){
                price = 4200 * 0.90;
            } else if(fishermen >=7 && fishermen <= 11) {
                price = 4200 * 0.85;
            } else {
                price = 4200 * 0.75;
            }
        break;
        case "Winter":
            if(fishermen <= 6){
                price = 2600 * 0.90;
            } else if(fishermen >=7 && fishermen <= 11) {
                price = 2600 * 0.85;
            } else {
                price = 2600 * 0.75;
            }
        break;
    }
    
    if(fishermen % 2 == 0 && season != "Autumn") {
        price = price * 0.95;
    }

    if(budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);  
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["2000","Winter","13"]);