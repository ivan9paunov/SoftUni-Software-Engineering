function spiceMustFlow(startingYield) {
    let totalSpices = 0;
    let days = 0;
    let hadWorked = false;

    while (startingYield >= 100) {
        hadWorked = true;
        totalSpices += startingYield;
        totalSpices -= 26;
        startingYield -= 10;
        days++;
    }

    if (hadWorked) {
        totalSpices -= 26;
    }

    console.log(days);
    console.log(totalSpices);
}

spiceMustFlow(111);
// spiceMustFlow(450);