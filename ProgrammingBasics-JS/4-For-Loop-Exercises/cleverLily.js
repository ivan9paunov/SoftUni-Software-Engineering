function cleverLily(input) {
    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneyAsGift = 0;
    let toysCounter = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for(let currentAge = 1; currentAge <= lilisAge; currentAge ++){
        if(currentAge % 2 === 0) {
            moneyAsGift += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else {
            toysCounter++;
        }
    }
   
    let totalMoney = (moneyAsGift - stolenMoney) + (toysCounter * toyPrice);
    
    if(totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    } else if(washingMachinePrice > totalMoney) {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
    
}

cleverLily(["10","170.00","6"]);