function easterBake(input) {
    let index = 0;
    let easterBreads = Number(input[index]);
    index++;

    let totalSugar = 0;
    let totalFlour = 0;
    let maxSugar = 0;
    let maxFlour = 0;
    
    for (let currentBread = 1; currentBread <= easterBreads; currentBread++) {
        let sugar = Number(input[index]);
        index++;
        let flour = Number(input[index]);
        index++;

        totalSugar += sugar;
        totalFlour += flour;

        if (sugar > maxSugar) {
            maxSugar = sugar;
        }
        if (flour > maxFlour) {
            maxFlour = flour;
        }
    }
    let packagesSugar = totalSugar / 950;
    let packagesFlour = totalFlour / 750;
    console.log(`Sugar: ${Math.ceil(packagesSugar)}`);
    console.log(`Flour: ${Math.ceil(packagesFlour)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}

easterBake(["3", "400", "350", "250", "300", "450", "380"]);
