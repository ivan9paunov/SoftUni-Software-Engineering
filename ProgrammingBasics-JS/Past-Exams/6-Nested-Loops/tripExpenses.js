function tripExpenses(input) {
    let index = 0;
    let tripDuration = input[index];
    index++;
    let command = input[index];

    let limit = 60;
    
    for (let day = 1; day <= tripDuration; day++) {
        let dailySpending = 0;
        let products = 0;
        while(command !== "Day over") {
            let productPrice = Number(command);
            if (dailySpending + productPrice > limit) {
                index++;
                command = input[index];
                continue;
            }
            
            dailySpending += productPrice;
            products++;

            if (dailySpending >= limit) {
                break;
            }

            index++;
            command = input[index];
        }
        if (dailySpending < limit) {
            console.log(`Money left from today: ${(limit - dailySpending).toFixed(2)}. You've bought ${products} products.`);
            limit += (limit -= dailySpending);
        } else {
            console.log(`Daily limit exceeded! You've bought ${products} products.`);
        }
        if (command === "Day over") {
            index++;
            command = input[index];
        }
    }
}

tripExpenses(["3","20","40","40","15","Day over","15","5","10","17","10","Day over"]);
// tripExpenses(["2","Day over","100","20"]);
// tripExpenses(["2","Day over","130","100","40","20"]);