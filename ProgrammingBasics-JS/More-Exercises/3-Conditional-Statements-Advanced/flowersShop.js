function flowersShop(input){
    let chrizantemas = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    let chrizantemasPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let totalFlowers = chrizantemas + roses + tulips;
    let flowersPrice = 0;
    let arrangingFlowers = 2.00;
    let finalPrice = 0;
    switch(season){
        case "Spring":
        case "Summer": 
            chrizantemasPrice = chrizantemas * 2.00;
            rosesPrice = roses * 4.10;
            tulipsPrice = tulips * 2.50;
        break;
        case "Autumn":
        case "Winter":
            chrizantemasPrice = chrizantemas * 3.75;
            rosesPrice = roses * 4.50;
            tulipsPrice = tulips * 4.15;
        break;
    }

    flowersPrice = chrizantemasPrice + rosesPrice + tulipsPrice;
    if(holiday === "Y") {
        flowersPrice = flowersPrice * 1.15;
    } else if(holiday === "N"){
        flowersPrice;
    }
    
    if(tulips > 7 && season === "Spring"){
        flowersPrice = flowersPrice * 0.95;
    } else if(roses >= 10 && season === "Winter") {
        flowersPrice = flowersPrice * 0.90;
    }

    if(totalFlowers > 20){
        flowersPrice = flowersPrice * 0.80;
    }
    
    finalPrice = flowersPrice + arrangingFlowers;
    console.log(finalPrice.toFixed(2));
}

flowersShop(["3","10","9","Winter","N"]);