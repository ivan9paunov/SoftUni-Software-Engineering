function carWash(inputArr) {
    let percentage = 0;

    for (let action of inputArr) {
        if (action == 'soap') {
            percentage += 10;
        } else if (action == 'water') {
            percentage *= 1.20;
        } else if (action == 'vacuum cleaner') {
            percentage *= 1.25;
        } else if (action == 'mud') {
            percentage *= 0.90;
        }
    }

    console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
// carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);