function reportSystem(input) {
    let index = 0;
    let sumToCollect = Number(input[index]);
    index++;
    let currentStep = input[index];
    let cashAmmount = 0;
    let cashPay = 0;
    let cardAmmount = 0;
    let cardPay = 0;

    while(input[index] !== "End") {
        currentStep = input[index];
        index++;
        if(Number(currentStep) >= 100) {
            console.log("Error in transaction!");
        } else {
            console.log("Product sold!");
            cashAmmount += Number(currentStep);
            cashPay++;
        }
        
        if((cashAmmount + cardAmmount) >= sumToCollect){
            break;
        }

        currentStep = input[index];
        index++;
        if(currentStep === "End"){
            break;
        }
        if(Number(currentStep) <= 10) {
            console.log("Error in transaction!");
        } else {
            console.log("Product sold!");
            cardAmmount += Number(currentStep);
            cardPay++;
        }
        
        if((cashAmmount + cardAmmount) >= sumToCollect){
            break;
        }
    }

    if((cashAmmount + cardAmmount) >= sumToCollect){
        console.log(`Average CS: ${(cashAmmount / cashPay).toFixed(2)}`);
        console.log(`Average CC: ${(cardAmmount / cardPay).toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
}

reportSystem(["500","120","8","63","256","78","317"]);
// reportSystem(["600","86","150","98","227","End"]);