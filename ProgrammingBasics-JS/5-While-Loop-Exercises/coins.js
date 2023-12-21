function coins(input){
    let ammount = Number(input[0]);
    let sumInCoins = Math.floor(ammount * 100);
    let coins = 0;
    
    while(sumInCoins > 0) {
        if(sumInCoins >= 200) {
            sumInCoins -= 200;
            coins++;
        } else if(sumInCoins >= 100) {
            sumInCoins -= 100;
            coins++;
        } else if(sumInCoins >= 50) {
            sumInCoins -= 50;
            coins++;
        } else if(sumInCoins >= 20) {
            sumInCoins -= 20;
            coins++;
        } else if(sumInCoins >= 10) {
            sumInCoins -= 10;
            coins++;
        } else if(sumInCoins >= 5) {
            sumInCoins -= 5;
            coins++;
        } else if(sumInCoins >= 2) {
            sumInCoins -= 2;
            coins++;
        } else if(sumInCoins >= 1) {
            sumInCoins -= 1;
            coins++;
        }
    }
    console.log(coins);
}

coins(["2.23"]);