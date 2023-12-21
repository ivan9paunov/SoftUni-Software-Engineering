function newHouse(input) {
    let flowersType = input[0];
    let totalFlowers = Number(input[1]);
    let budget = Number(input[2]); 
    let moneyForFlowers = 0;
    switch(flowersType){
        case "Roses" :
            if(totalFlowers > 80){
                moneyForFlowers = (totalFlowers * 5.00) * 0.90;
            } else {
                moneyForFlowers = totalFlowers * 5.00;
            }
        break;
        case "Dahlias" :
            if(totalFlowers > 90){
                moneyForFlowers = (totalFlowers * 3.80) * 0.85;
            } else {
                moneyForFlowers = totalFlowers * 3.80;
            }
        break;
        case "Tulips" :
            if(totalFlowers > 80){
                moneyForFlowers = (totalFlowers * 2.80) * 0.85;
            } else {
                moneyForFlowers = totalFlowers * 2.80;
            }
        break;
        case "Narcissus" :
            if(totalFlowers < 120){
                moneyForFlowers = (totalFlowers * 3.00) * 1.15;
            } else {
                moneyForFlowers = totalFlowers * 3.00;
            }
        break;
        case "Gladiolus" :
            if(totalFlowers < 80){
                moneyForFlowers = (totalFlowers * 2.50) * 1.20;
            } else {
                moneyForFlowers = totalFlowers * 2.50;
            }
        break;
    }
    if(budget >= moneyForFlowers){
        console.log(`Hey, you have a great garden with ${totalFlowers} ${flowersType} and ${(budget - moneyForFlowers).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(moneyForFlowers - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Tulips","88","260"]);