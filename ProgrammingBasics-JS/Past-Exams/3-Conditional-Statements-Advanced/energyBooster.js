function energyBooster(input){
    let flavor = input[0];
    let size = input[1];
    let quantity = Number(input[2]);
    let packagePrice = 0;
    let prePrice = 0;
    switch (size) {
        case "small": {
            switch (flavor) {
                case "Watermelon": packagePrice = 56.00 * 2; break;
                case "Mango"     : packagePrice = 36.66 * 2; break;
                case "Pineapple" : packagePrice = 42.10 * 2; break;
                case "Raspberry" : packagePrice = 20.00 * 2; break;
            }
        }
        break;
        case "big"  : {
            switch (flavor) {
                case "Watermelon": packagePrice = 28.70 * 5; break;
                case "Mango"     : packagePrice = 19.60 * 5; break;
                case "Pineapple" : packagePrice = 24.80 * 5; break;
                case "Raspberry" : packagePrice = 15.20 * 5; break;
            }
        }
        break;
    }

    prePrice = packagePrice * quantity;
    if(prePrice >= 400 && prePrice <= 1000){
        prePrice = prePrice * 0.85;
    } else if(prePrice > 1000){
        prePrice = prePrice * 0.50;
    }
    console.log(`${prePrice.toFixed(2)} lv.`);
}

energyBooster(["Watermelon","big","4"]);