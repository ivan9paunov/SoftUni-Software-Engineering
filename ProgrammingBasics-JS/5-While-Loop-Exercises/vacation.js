function vacation(input) {
    let index = 0; 
    let neededMoney = Number(input[index]);
    index++;
    let collectedMoney = Number(input[index]);
    index++;

    let days = 0;
    let consecutiveDays = 0;

    let failedToCollect = false;
    while(collectedMoney < neededMoney) {
        let condition = input[index];
        index++;
        days++;
        if(condition === "spend") {
            consecutiveDays++;
            if(consecutiveDays === 5){
                failedToCollect = true;
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }
            let currentMoneyToSpend = Number(input[index]);
            collectedMoney -= currentMoneyToSpend;
            if (collectedMoney < 0) {
                collectedMoney = 0;
            }
        } else if(condition === "save") {
            consecutiveDays = 0;
            let currentMoneyToSave = Number(input[index]);
            collectedMoney += currentMoneyToSave;
        }
        index++;
    }
    if(!failedToCollect) {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation(["2000","1000","spend","1200","save","2000"]);
// vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"]);
// vacation(["250","150","spend","50","spend","50","save","100","save","100"]);
