function bakingCompetition(input) {
    let index = 0;
    let competitors = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let productsSold = 0;
    let hereComesTheMoney = 0;

    for (let competitor = 1; competitor <= competitors; competitor++) {
        let competitorName = command;
        let cookies = 0;
        let cakes = 0;
        let waffles = 0;
        while (command !== "Stop baking!") {
            let product = input[index];
            index++;
            let ammount = Number(input[index]);
            index++;
            switch (product) {
                case "cookies": cookies += ammount; break;
                case "cakes"  : cakes += ammount; break;
                case "waffles": waffles += ammount; break;
            }
            command = input[index];
        }
        index++;
        command = input[index];
        index++;

        productsSold += cookies + cakes + waffles;
        hereComesTheMoney += (cookies * 1.50) + (cakes * 7.80) + (waffles * 2.30);
        console.log(`${competitorName} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
    }
    console.log(`All bakery sold: ${productsSold}`);
    console.log(`Total sum for charity: ${hereComesTheMoney.toFixed(2)} lv.`);
}

// bakingCompetition(["3","Iva","cookies","5","cakes","3","Stop baking!",
//                        "George","cakes","7","waffles","2","Stop baking!",
//                        "Ivan","cookies","6","Stop baking!"]);
bakingCompetition(["3","George","cookies","10","Stop baking!",
                       "Annie","waffles","8","Stop baking!",
                       "Ivan","cookies","6","waffles","3","Stop baking!"]);