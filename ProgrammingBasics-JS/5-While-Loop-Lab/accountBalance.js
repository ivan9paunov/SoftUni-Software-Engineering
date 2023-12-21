function accountBalance(input) {
    let index = 0;
    let command = input[index];
    index ++;
    let account = 0;

    while(command !== "NoMoreMoney") {
        let deposit = Number(command);
        if(deposit < 0) {
            console.log("Invalid operation!");
            break;
        }
        
        console.log(`Increase: ${deposit.toFixed(2)}`);
        account += deposit;
        command = input[index];
        index++;
        
    }
    console.log(`Total: ${account.toFixed(2)}`);
}

accountBalance(["120","45.55","-150"]);
