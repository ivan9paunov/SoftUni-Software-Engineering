function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let moneySpent = 0;
    let destination = "";
    let place = "";
    if(budget <= 100) {
        destination = "Bulgaria";
        switch(season){
            case "summer": moneySpent = budget * 0.30; break;
            case "winter": moneySpent = budget * 0.70; break;
        }
    } else if(budget <= 1000) {
        destination = "Balkans";
        switch(season){
            case "summer": moneySpent = budget * 0.40; break;
            case "winter": moneySpent = budget * 0.80; break;
        }
    } else if(budget > 1000) {
        destination = "Europe";
        moneySpent = budget * 0.90;
    }

    if(season === "summer" && destination != "Europe") {
        place = "Camp";
    } else {
        place = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${moneySpent.toFixed(2)}`);
}

journey(["1500","summer"]);