function flowerShop(input) {
    let chrisantemas = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    
    let totalFlowers = chrisantemas + roses + tulips;
    let chrisantemasPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch(season) {
        case "Spring":
        case "Summer": chrisantemasPrice = chrisantemas * 2.00;
                       rosesPrice = roses * 4.10;
                       tulipsPrice = tulips * 2.50;
        break;
        case "Autumn":
        case "Winter": chrisantemasPrice = chrisantemas * 3.75;
                       rosesPrice = roses * 4.50;
                       tulipsPrice = tulips * 4.15;
        break;
    }

    let regularPrice = chrisantemasPrice + rosesPrice + tulipsPrice;

    if (isHoliday === "Y") {
        regularPrice = regularPrice * 1.15;
    }
    
    if (tulips > 7 && season === "Spring") {
        regularPrice = regularPrice * 0.95;
    } else if (roses >= 10 && season === "Winter") {
        regularPrice = regularPrice * 0.90;
    } 
    
    if (totalFlowers > 20) {
        regularPrice = regularPrice * 0.80;
    }

    let totalPrice = regularPrice + 2;
    console.log(totalPrice.toFixed(2));
}

flowerShop(["10","10","10","Autumn","N"]);