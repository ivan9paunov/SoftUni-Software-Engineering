function dishwasher(input) {
    let index = 0;
    let detergentBottles = Number(input[index]);
    index++;
    let step = input[index];
    
    let oneBottleInMl = 750;
    let detergentInMl = oneBottleInMl * detergentBottles;
    let detergentForDish = 5;
    let detergentForPot = 15;
    let dishes = 0;
    let pots = 0;
    while(step !== "End") {
        if(detergentInMl < 0) {
            break;
        }
        if(index % 3 === 0) {
            detergentInMl -= (Number(step) * detergentForPot);
            pots += Number(step);
        } else {
            detergentInMl -= (Number(step) * detergentForDish);
            dishes += Number(step);
        }
        index++;
        step = input[index];
    }
    if(detergentInMl < 0) {
        console.log(`Not enough detergent, ${Math.abs(detergentInMl)} ml. more necessary!`);
    } else {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergentInMl} ml.`);
    }
}

// dishwasher(["2","53","65","55","End"]);
dishwasher(["1","10","15","10","12","13","30"]);
